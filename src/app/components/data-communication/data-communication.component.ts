import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-communication',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-communication.component.html',
  styleUrls: ['./data-communication.component.scss']
})
export class DataCommunicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
