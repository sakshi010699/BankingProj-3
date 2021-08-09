import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  LoginForm= new FormGroup({
    UserId : new FormControl("",[Validators.required]),
    Password : new FormControl("",[Validators.required])
  })
  onSubmit(){
    console.log(this.LoginForm.value);
  }

}
