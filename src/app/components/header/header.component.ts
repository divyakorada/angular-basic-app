import {Component, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewChecked {

  @ViewChild('myDivElement', { static: false }) myDiv: ElementRef;
  count: number = 0;

  ngAfterViewChecked() {
    // Accessing the DOM element and performing actions.
    this.myDiv.nativeElement.style.backgroundColor = 'yellow';
  }

  increment() {
    this.count++;
  }
}
