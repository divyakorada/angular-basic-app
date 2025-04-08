import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  message: string = 'Hi Im from child';

  @Output() messageEvent = new EventEmitter;

  @Input() childMsg: string;

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

}
