import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements AfterViewInit {

  count: number=0;
  @ViewChild('myDivElement', {static: true}) myDiv: ElementRef;
  @ViewChild(CounterComponent) abc!: CounterComponent;

  constructor() { }

 ngAfterViewInit() {
  this.myDiv.nativeElement.style.backgroundColor = 'yellow';
 }
  viewClick() {
    this.count++;
  }

  incrementCounter(){
    this.abc.increment()
  }

  DecrementCounter() {
    this.abc.decrement()
  }

}
