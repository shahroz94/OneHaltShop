import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:ProductsComponent
  },
  {
    path:"products",
    pathMatch:"full",
    loadChildren: () => import('./products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
