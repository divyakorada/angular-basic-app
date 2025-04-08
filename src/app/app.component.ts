import { Component, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { of, takeUntil } from 'rxjs';
import { PureImpurePipe } from './pipes/pure-impure.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  $font-color: blue;
  $font-size: 12px;
  .ctn {
    color: red
  };
  .wrater{
    position: relative;
    font-size: font-size;
  };
  .age-table td{
    padding: 10px;
}
  `]
})
export class AppComponent implements AfterViewInit{
  title = 'Basic-app';
  userText : string = 'Divya';
  data: any;
  currentDate = new Date();
  birthday = new Date('1989-5-2');

  user = {
    firstName: 'John',
    city: 'New york'
  }

  name = 'angular title case';
  salary = 67000;
  num = 0.98;

  stringPipe = 'Divya';
  country = ['India', 'pakistan', 'Bangladesh', 'Russia']


  @ViewChild('divya', { static: true }) divya: TemplateRef<any>;

constructor(private vref:ViewContainerRef) {
  const numbers = [ 12, 23, 34, 45, 5, 7 ];
  let obj = of(10,23,32,47,50);
  obj.subscribe((x) => console.log('x', x));
  const subtracts1 = numbers.reduce(( value, index, array ) => {
     return value + index;
  });
}

ngAfterViewInit() {
  console.log('hi::::', this.divya);
  const context = {data: 'Helo im component dynamic data'}
  this.vref.createEmbeddedView(this.divya, context);
}

 
/* Reactive forms */
  contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(10)]),
    lastname: new FormControl('',[Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
    email:new FormControl('',[Validators.email,Validators.required]),
    gender: new FormControl('',[Validators.required]),
    isMarried: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
  })
  
  onSubmit() {
    console.log('contactForm::::', this.contactForm);
    console.log('hi::::', this.contactForm.value);
    console.log('valid::::', this.contactForm.valid);
    console.log('touched::::', this.contactForm.touched  );
  }
/* Reactive forms */

  

ngOnInit(){}

dynamicContext: { message: string } = { message: '' };

renderTemplate(message: string) {
  this.dynamicContext.message = message;
}

items: string[] = ['Item 1', 'Item 2', 'Item 3', 'hi', 'hello'];

  ngAfterViewChecked() {
    console.log('View checked and updated!');
  }

  // search text property
searchText: string;

// list of categories
categories: any[] = [
{id: 1, categoryName:"Schools"},
{id: 2, categoryName:"Colleges"},
{id: 3, categoryName:"Doctors"},
{id: 4, categoryName:"Hospitals"},
{id: 5, categoryName:"Advocates"}
]


users = [
  {id: 101, name: 'john', salary: 2, bod: '1989-02-16'},
  {id: 109, name: 'jane', salary: 6, bod: '1986-08-10'},
  {id: 103, name: 'mike', salary: 3, bod: '1996-11-19'},
  {id: 106, name: 'peter', salary: 8, bod: '1991-02-11'}
]

addItem(e: any) {
  console.log('country', e);
  this.country.push(e)
}

}

