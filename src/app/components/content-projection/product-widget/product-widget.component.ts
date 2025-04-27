import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.scss']
})
export class ProductWidgetComponent implements OnInit {

  @Input() products:{ id: number; name: string; price: string }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
