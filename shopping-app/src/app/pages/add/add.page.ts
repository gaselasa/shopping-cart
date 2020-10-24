import { Component, OnInit } from '@angular/core';
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

  product: Product;
  constructor(public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private firestoreService: FirestoreService,
              formBuilder: FormBuilder,
              private router: Router) {
   this.createProductForm = formBuilder.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],

  });





               }
public createProductForm: FormGroup;

note: any;

  ngOnInit() {
  }

  async createProduct() {
  const loading = await this.loadingCtrl.create();

  const  description = this.createProductForm.value.description;
  const name = this.createProductForm.value.name;
  const price = this.createProductForm.value.price;

  this.firestoreService
    .createProduct(description, name, price)
    .then(
      () => {
        loading.dismiss().then(() => {
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


 addPic(event: any) {
    const reader = new FileReader();
    // tslint:disable-next-line: no-shadowed-variable
    reader.onload = (event: any) => {
      this.product.pic = event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);

  }


}
