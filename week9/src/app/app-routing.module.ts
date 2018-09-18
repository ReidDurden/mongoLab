import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProduct } from './add-product/add-product.component';
import { Products } from './products/products.component';
import { UpdateProduct } from './update-product/update-product.component';


const routes: Routes = [
  {path: 'addProd', component: AddProduct },
  {path: 'products', component: Products },
  {path: 'updateProd', compoent: UpdateProduct},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
