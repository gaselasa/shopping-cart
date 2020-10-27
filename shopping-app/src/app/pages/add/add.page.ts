import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/product.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
 itemsRef: AngularFirestoreCollection;
  items: Observable<any[]>;
  selectedFile: any;
  public createProductForm: FormGroup;
  loading: HTMLIonLoadingElement;
  product: Product;
      id;


  constructor(public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private db: AngularFirestore,
              private loadingController: LoadingController, 
              private storage: AngularFireStorage, 
              private firestoreService: FirestoreService,
              formBuilder: FormBuilder,
              private firestore: AngularFirestore,
             
              private router: Router) {


    this.itemsRef = this.db.collection('ProductList');
    this.items = this.itemsRef.valueChanges();


    this.createProductForm = formBuilder.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],

  });

}





  ngOnInit() {
  }




  async createProduct() {
  const loading = await this.loadingCtrl.create();

  const  description = this.createProductForm.value.description;
  const name = this.createProductForm.value.name;
  const price = this.createProductForm.value.price;
  this.id = this.firestore.createId();
  this.firestoreService
    .createProduct(description, name, price,this.id)
    .then(
      () => {
        loading.dismiss().then(() => {
       this.upLoadImage();

       this.router.navigateByUrl('');
        });
      },
      error => {
        loading.dismiss().then(() => {
          console.error(error);
        });
      }
    );

  return await loading.present();
}

  async upLoadImage(){

  const imageUrl = await this.uploadFile(this.id, this.selectedFile)
  
console.log(imageUrl)

  this.itemsRef.doc(this.id).update({
        id: this.id,
        imageUrl: imageUrl 
      });


}
 
 

  chooseFile (event) {
    this.selectedFile = event.target.files;
  }

  

   
  async uploadFile(id, file): Promise<any> {

console.log()
    if(file && file.length) {
      
  
      try {
        await this.presentLoading();
        const task = await this.storage.ref('images').child(id).put(file[0])
        this.loading.dismiss();
        return this.storage.ref(`images/${id}`).getDownloadURL().toPromise();
      } catch (error) {
        console.log(error);
      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    return this.loading.present();
  }
}

