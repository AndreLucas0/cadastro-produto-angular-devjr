import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products : ProductInterface [] = [];

  getProducts() : ProductInterface[] {
    return this.products;
  }

  saveProduct(product : ProductInterface) {
    product.id = this.products.length + 1;
    this.products.push(product);
  }
}
