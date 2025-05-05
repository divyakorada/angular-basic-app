import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss',]
})
export class ChildComponent implements OnInit {


siblingCommunication: any;

  @Input() color: string;
  @Input() primaryColor: string;


  @Output() messageEvent = new EventEmitter<string>();
  message: string = 'Im from child';

  constructor(private CS: CounterService) { }

  ngOnInit(): void {
    this.CS.message$.subscribe((msg) => {
    this.siblingCommunication = msg
    })
  }


  sendMessage() {
    this.messageEvent.emit(this.message)
  }



}
