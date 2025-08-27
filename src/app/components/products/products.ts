import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { ProductInterface } from '../../interfaces/Product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  
  idCount : number = 1;
  product : ProductInterface = {} as ProductInterface;

  products : ProductInterface [] = [];

  categories : Category [] = [
    {
      id : 1,
      name : "Produção Própria"
    },
    {
      id : 2,
      name : "Nacional"
    },
    {
      id : 3,
      name : "Importado"
    },
    {
      id : 4,
      name : "Premium"
    }
  ]

  saveProduct() {
    this.product.id = this.idCount;
    this.idCount++;
    this.products.push(this.product);
    this.product = {} as ProductInterface;
  }

  ngOnInit(): void {
  }

  
}
