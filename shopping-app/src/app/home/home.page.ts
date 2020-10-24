import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.interface';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{



   productList: Observable<Product[]>;




  constructor(private firestoreService: FirestoreService/*private messageService:MessageService*/){ 
    this.callGetProduct();

  }

  ngOnInit(): void {
   /* this.messageService.getMessage().subscribe(()=>{
      this.callGetProduct();
    })*/
  this.productList = this.firestoreService.getProductList();

  }
  callGetProduct(){
  /*  this.firestoreService.getProductList().subscribe((product: Product[])=>{


      this.productList= product;
      });*/

  }

}
