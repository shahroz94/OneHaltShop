import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneHaltMaterialModule } from './material-module';
import { HomeComponent } from './home/home.component';
import { ProductsRoutingModule } from './products/products-routing.module';
import { StarterModule } from './starter/starter.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OneHaltMaterialModule,
    ProductsRoutingModule,
    StarterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
