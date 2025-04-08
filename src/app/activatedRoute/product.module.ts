import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';

import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [ProductComponent,ProductDetailComponent],
  imports: [
    CommonModule
  ],
  providers:[ProductService]
})
export class ProductModule { }
