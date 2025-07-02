import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomDatePipe, FullNamePipe } from '../full-name.pipe';
import {
  ReversePipe,
  UppercaseFirstPipe,
  ReversePurePipe,
  ReverseImpurePipe,
  PureExamplePipe,
  ImpureExamplePipe,
  EvenNumbersPipe
} from '../reverse.pipe';


@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReversePipe,
    ReversePurePipe,
    ReverseImpurePipe,
    UppercaseFirstPipe,
    PureExamplePipe,
    FullNamePipe,
    CustomDatePipe,
    EvenNumbersPipe
  ],

  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
  inputVal: any;
  myArray: any;
  today:any =  new Date();
  numbers = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void { }


  addNumber() {
  // pushing without changing array reference
  this.numbers.push(6);
}
}
