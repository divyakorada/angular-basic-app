import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div>viewchild with component reference {{count}}</div>
  `,
})
export class CounterComponent  {

  count = 0;

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
