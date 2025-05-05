import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-common-directive',
  standalone: true,
  imports:[HighlightDirective],
  templateUrl: './common-directive.component.html',
  styleUrls: ['./common-directive.component.scss']
})
export class CommonDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
