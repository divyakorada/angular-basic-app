import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductWidgetComponent } from './product-widget/product-widget.component';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [CommonModule, ProductWidgetComponent],
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit {

  salesProducts = [
    {id: 1, name: 'ACS', price: '100'},
    {id: 2, name: 'Phones', price: '2000'},
    {id: 3, name: 'Fashion', price: '5000'},
    {id: 4, name: 'Electronics', price: '3000'},
  ]
  topProducts = [
    {id: 1, name: 'ACS', price: '100'},
    {id: 2, name: 'Phones', price: '2000'},
    {id: 3, name: 'Fashion', price: '5000'},
    {id: 4, name: 'Electronics', price: '3000'},
  ]

  constructor() { }

  ngOnInit(): void {
    
  }
 

}
