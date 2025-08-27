import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { ProductInterface } from '../../interfaces/Product';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {
  
  ngOnInit(): void {
  }

  @Input()
  categories : Category [] = [];

  product : ProductInterface = {} as ProductInterface;

  @Output()
  saveEmitter = new EventEmitter();

  save() {
    console.log(this.product);
    this.saveEmitter.emit();
  }

  
}
