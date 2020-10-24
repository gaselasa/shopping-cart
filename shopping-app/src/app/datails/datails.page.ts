import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.interface';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-datails',
  templateUrl: './datails.page.html',
  styleUrls: ['./datails.page.scss'],
})
export class DatailsPage implements OnInit {

  // tslint:disable-next-line: typedef-whitespace
  product: Product;

  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
     
  ) { 

    this.product= new Product();

  }

async deleteSong(Id: string, name: string): Promise<void> {
  const alert = await this.alertController.create({
    message: `Are you sure you want to delete ${this.product.name}?`,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: blah => {
          console.log('Confirm Cancel: blah');
        },
      },
      {
        text: 'Okay',
        handler: () => {
          this.firestoreService.deleteSong(this.product.id).then(() => {
            this.router.navigateByUrl('');
          });
        },
      },
    ],
  });

  await alert.present();
}




  ngOnInit() {

    console.log("gasela")
    const productId: string = this.route.snapshot.paramMap.get('id');
    console.log('inside details')

    this.firestoreService.getProductDetails(productId).subscribe(product => {

      console.log('My product ', product.price);
      this.product = product;

    });

  }

  }
