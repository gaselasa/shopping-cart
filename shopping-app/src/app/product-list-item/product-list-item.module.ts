import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListItemPageRoutingModule } from './product-list-item-routing.module';

import { ProductListItemPage } from './product-list-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListItemPageRoutingModule
  ],
  declarations: [ProductListItemPage]
})
export class ProductListItemPageModule {}
