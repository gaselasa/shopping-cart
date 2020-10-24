import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/product.interface';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }


createProduct(description: string, name: string, price: number, ): Promise<void> {

   const id = this.firestore.createId();

   return this.firestore.doc(`ProductList/${id}`).set({
  id,

name,
description,

price,

  });

}
getProductList(): Observable<Product[]> {
  return this.firestore.collection<Product>(`ProductList`).valueChanges();
}

getProductDetails(id: string): Observable<any>{
 return this.firestore.collection('ProductList').doc<Product>(id).valueChanges();
}

deleteSong(Id: string): Promise<void> {
  return this.firestore.doc(`ProductList/${Id}`).delete();
}



}
