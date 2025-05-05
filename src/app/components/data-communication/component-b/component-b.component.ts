import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-component-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  receivedMessage: any;


  constructor(private CS: CounterService) { }

  ngOnInit(): void {
    this.CS.message$.subscribe((msg) => {
      this.receivedMessage = msg;
    })
  }

}
