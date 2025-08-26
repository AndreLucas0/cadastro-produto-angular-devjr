import { Component, Input } from '@angular/core';
import { Category } from '../../interfaces/Category';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

  @Input()
  category : Category = {} as Category;

  categories : Category[] = [
    {
      id : 1,
      name : "Nacional"
    },
    {
      id : 2,
      name : "Importado"
    },
    {
      id : 3,
      name : "Premium"
    }
  ]
}
