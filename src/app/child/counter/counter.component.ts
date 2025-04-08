import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      counter increment decrement logic written in counter component!
    </p>
  `,
  styles: [
    
  ]
})
export class CounterComponent implements OnInit {
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
