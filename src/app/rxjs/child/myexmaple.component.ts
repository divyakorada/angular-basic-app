import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-myexample',
  template: `<p>Watch console for numbers...</p>`,
  styles: [
  ]
})
export class MyexampleComponent implements OnInit, OnDestroy {

  private stop$ = new Subject<void>(); // this is our "stop signal"

  ngOnInit() {
    // This prints a number every 1 second
    interval(1000)
      .pipe(takeUntil(this.stop$)) // keep running until stop$ emits
      .subscribe(value => {
        console.log('Tick:', value); // 0, 1, 2, 3...
      });
  }

  ngOnDestroy() {
    this.stop$.next(); // sends a "stop" signal
    this.stop$.complete(); // good practice to complete the subject
    console.log('Component destroyed!');
  }

}
