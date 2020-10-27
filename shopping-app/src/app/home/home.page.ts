import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.interface';
import { FirestoreService } from '../services/data/firestore.service';

import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";

import { AlertController, LoadingController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

   
   productList: Observable<Product[]>;




  constructor(private firestoreService: FirestoreService,
          
              private alertController: AlertController,
           ){

 
              }
  ngOnInit(): void {
    this.productList = this.firestoreService.getProductList();
    
    }
 

  async deleteSong(id: string, name: string): Promise<void> {
   
    const alert = await this.alertController.create({
    message: `Are you sure you want to delete ${name}?`,
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
          this.firestoreService.deleteSong(id).then(() => {
          });
        },
      },
    ],
  });

    await alert.present();
}






}
