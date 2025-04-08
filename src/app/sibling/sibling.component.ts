import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit, OnDestroy {

  message:string;
  subscription: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.messageSource.subscribe(value => this.message = value)
  }

  newMessage() {
    this.data.changeMessage("Hello Im Behaviour Subject last emitted value")
  }

  sendMsg(inputMsg: any) {
    this.data.receiveMsg(inputMsg.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}