import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListItemPage } from './product-list-item.page';

const routes: Routes = [
  {
    path: '',
    component: ProductListItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductListItemPageRoutingModule {}
