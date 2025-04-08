import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';
import { CounterComponent } from '../child/counter/counter.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnDestroy {

  message:string;
  subscription: Subscription;

  showInputMsg: any;
  
  childMessage: string;
  parentMessage: string = 'Im from parent';

  @ViewChild('showCount') showCountChild: CounterComponent;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.messageSource.subscribe(msg => this.message = msg);
   this.data.subjectObs.subscribe(x => this.showInputMsg = x);
  }


  recieveMessage($event: any) {
    console.log('event', $event);
    this.childMessage = $event;
  }

  inc() {
    this.showCountChild.increment();
  }
  dec() {
    this.showCountChild.decrement();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}