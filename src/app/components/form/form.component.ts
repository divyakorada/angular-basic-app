import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormGroup, FormsModule, Validators} from '@angular/forms';
import {passwordMatchValidator} from './validators/password-match.valiator';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  user = {
    Username: '',
    password: ''
  }

// loginForm = new FormGroup({
//   uname: new FormControl('', [Validators.required, Validators.minLength(3)]),
//   pwd: new FormControl('', [Validators.required, Validators.minLength(6)]),
//   conformpwd: new FormControl('', [Validators.required, Validators.minLength(6)]),
//   },
//   {
//     validators: passwordMatchValidator('pwd', 'conformpwd')
//   }
// )

loginForm = new FormGroup<{
  uname: FormControl<string>;
  pwd: FormControl<string>;
  conformpwd: FormControl<string>;
}>(
  {
  uname: new FormControl('',
    { 
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
  pwd: new FormControl('',
    {
     nonNullable: true,
     validators: [Validators.required, Validators.minLength(6)]
    }),
  conformpwd: new FormControl('', {
     nonNullable: true, 
     validators: [Validators.required, Validators.minLength(6)]
    }),
  },
  {
    validators: passwordMatchValidator('pwd', 'conformpwd'),
  }
);

  constructor() { }

  ngOnInit(): void {}


  userForm(val:any) {
    console.log(val)
    console.log(this.user)
  }

  onSubmit() {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
  }

}
