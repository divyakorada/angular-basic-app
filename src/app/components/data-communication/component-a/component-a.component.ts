import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-component-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {

  count: number = 0;

  constructor(private counterservice: CounterService) { }

  ngOnInit(): void {
  }

  counterIncrement() {
    this.counterservice.sendMessage( this.count += 1)
  }

}
