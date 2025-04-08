import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  constructor(private AR: ActivatedRoute) { }

   user = {
    lastName: ''
   }
   hello : {
    id: string
   }

  ngOnInit(): void {
    console.log("ARR:::", this.AR);
    this.hello = {
      id: this.AR.snapshot.params['id']
    }
    console.log("id::::", this.hello)
  }




/*
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
} */

onSubmit(form: NgForm) {
    console.log("form::::", form)
    console.log('hi::::', form.value);
    console.log('valid::::', form.valid);
    console.log('touched::::', form.touched  );
    if (form.valid) {
      // Form is valid, perform the submission or other actions here.
    } else {
      // Form is invalid, handle error or show validation messages.
    }
  }

}

