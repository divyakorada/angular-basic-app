import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-directives.component.html',
  styleUrls: ['./ng-directives.component.scss']
})
export class NgDirectivesComponent implements AfterViewInit {

  @ViewChild('myTemplate', {static: true}) myTemplateRef: TemplateRef<any>;
  @ViewChild('container', {static: true, read: ViewContainerRef}) myContainer: ViewContainerRef;

   isStyled: boolean = true; // Can be toggled to switch between templates

  ngAfterViewInit() {
    this.myContainer.createEmbeddedView(this.myTemplateRef);
    this.handleClick;
  }

  handleClick() {
    this.isStyled = !this.isStyled;
  }

  constructor() { }

}
 