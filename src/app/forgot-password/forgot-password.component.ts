import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ForgotPasswordForm = new FormGroup({

    Enter_User_Id: new FormControl("",[Validators.required]),
    Enter_OTP : new FormControl("",[Validators.required])
  })
  onSubmit(){
    console.log(this.ForgotPasswordForm.value);
  }

}
