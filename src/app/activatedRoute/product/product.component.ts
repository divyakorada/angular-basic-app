import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[];
 
  constructor(
    public activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}
 
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
