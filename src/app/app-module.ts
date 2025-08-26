import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Header } from './components/header/header';
import { Product } from './components/product/product';
import { Products } from './components/products/products';
import { Footer } from './components/footer/footer';

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
    NgbModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
