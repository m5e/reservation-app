import { Injectable } from '@angular/core';
import { products } from 'src/app/products';

@Injectable()
export class ProductService {

  getProducts() {
    return products
  }

  getproductById(productId: number){
    return products[productId]
  }
}