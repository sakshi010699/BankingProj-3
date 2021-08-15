import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhoneNumber } from 'Models/phone-number';
import { SNetbankingUserService } from '../Services/s-netbanking-user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private obj: SNetbankingUserService) { }

  phoneNo:PhoneNumber={
    country:"+91",
    phNo:""
  }

  phNumber:string="";

  ngOnInit(): void {
  }
  ForgotPasswordForm = new FormGroup({

    Enter_User_Id: new FormControl(0,[Validators.required]),
    Enter_OTP : new FormControl("",[Validators.required])
  })
  onSubmit(){
    console.log(this.ForgotPasswordForm.value);
  }

  sendOTP(data:number){

    //console.log(this.ForgotPasswordForm.controls.Enter_User_Id.value);
    this.obj.getNetBankingByID(data).subscribe(res=>{
      this.obj.getAccountsByID(res.accountNumber).subscribe(resp=>{
        this.obj.getUserDetailsByID(resp.aadharCardNumber).subscribe(response=>{
          this.phoneNo.phNo=response.mobileNumber;

          this.phNumber=this.phoneNo.country+this.phoneNo.phNo;
          console.log(this.phNumber);
        })
      })
    })
  }

}
