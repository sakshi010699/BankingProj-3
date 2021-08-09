import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-user-id',
  templateUrl: './forgot-user-id.component.html',
  styleUrls: ['./forgot-user-id.component.css']
})
export class ForgotUserIdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
ForgotUserIdForm = new FormGroup({

Enter_User_Id: new FormControl("",[Validators.required]),
    Enter_OTP : new FormControl("",[Validators.required])
  })
  onSubmit(){
    console.log(this.ForgotUserIdForm.value);
  }
}
