import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReversePipe, UppercaseFirstPipe, ReversePurePipe, ReverseImpurePipe, PureExamplePipe,ImpureExamplePipe  } from '../reverse.pipe'


@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule, FormsModule, ReversePipe, ReversePurePipe, ReverseImpurePipe, UppercaseFirstPipe, PureExamplePipe, ImpureExamplePipe],

  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
inputVal: any;
myArray:[]

  constructor() { }

  ngOnInit(): void {
  }

}
