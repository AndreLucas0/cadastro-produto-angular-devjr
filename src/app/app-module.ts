import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Header } from './components/header/header';
import { Product } from './components/product/product';
import { Products } from './components/products/products';
import { Footer } from './components/footer/footer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Header,
    Product,
    Products,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
