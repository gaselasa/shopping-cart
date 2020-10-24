import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.interface';
import { FirestoreService } from '../services/data/firestore.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule  {

  public ProductList: Observable<Product[]>;
  constructor(
    private firestoreService: FirestoreService
  ) {

 this.ProductList = this.firestoreService.getProductList();
   }


}
