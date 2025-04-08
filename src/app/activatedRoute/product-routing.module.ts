import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [{
  path: 'products',
  component: ProductComponent,
  children: [
    {
      path: 'detail/:id',
      component: ProductDetailComponent,
    },
  ],
},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProductRoutingModule { }


