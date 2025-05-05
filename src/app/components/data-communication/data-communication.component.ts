import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from "./child/child.component";
import { ComponentAComponent } from "./component-a/component-a.component";
import { ComponentBComponent } from "./component-b/component-b.component";
import { CounterService } from './counter.service';
import { ViewchildComponent } from "./viewchild/viewchild.component";

@Component({
  selector: 'app-data-communication',
  standalone: true,
  imports: [CommonModule, ChildComponent, ComponentAComponent, ComponentBComponent, ViewchildComponent],
  templateUrl: './data-communication.component.html',
  styleUrls: ['./data-communication.component.scss']
})
export class DataCommunicationComponent implements OnInit {

  red: string = 'rgb(253 9 9)';
  blue: string = 'rgb(9 46 253)';
  receivedMessage : string = 'Hello';
  siblingCommunication: any;

  constructor(private CS: CounterService) { }

  ngOnInit(): void {
    this.CS.message$.subscribe((msg) => {
      this.siblingCommunication = msg;
    })
  }

  recieveMessage(message: any) {
    console.log('x', message);
    this.receivedMessage  = message; 
  }

}
