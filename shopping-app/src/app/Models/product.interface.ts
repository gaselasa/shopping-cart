import { Url } from 'url';

export interface Product{

// tslint:disable-next-line: ban-types
id: string;
// tslint:disable-next-line: ban-types
name: string;
Description: string;
// tslint:disable-next-line: ban-types
price: string;
pic: Url;
}

export class Product implements Product{

    id:string
    name:string
    Description:string
    price:string
    imageUrl:Url
    constructor(){


    }


}
