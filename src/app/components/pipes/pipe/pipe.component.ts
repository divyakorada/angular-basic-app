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
    ImpureExamplePipe,
    FullNamePipe,
    CustomDatePipe
  ],

  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
  inputVal: any;
  myArray: any;
  today:any =  new Date();

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.myArray = [1, 2, 3, 4, 5];
    }, 1000);
  }
}
