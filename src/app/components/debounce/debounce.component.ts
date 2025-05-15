import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-debounce',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="debounce-ctn">
  <p>
    <input #searchInput type="text" (input)="onInputChange(searchInput.value)" placeholder="Type something....."/>
    <!--<input type="text" (input)="onInputChange(($event.target as HTMLInputElement).value)" />-->
  </p>
    <p>{{inputValue}}</p>
  </div>
  `,
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit, OnDestroy {

  inputValue: string = '';
  inputSubject = new Subject<string>();
  subscription = new Subscription;

  constructor() { }

  ngOnInit() {
  this.subscription = this.inputSubject.pipe(
      debounceTime(1000)
    ).subscribe(val => {
      this.inputValue = val;

    })
  }

  onInputChange(value: string) {
    this.inputSubject.next(value)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
