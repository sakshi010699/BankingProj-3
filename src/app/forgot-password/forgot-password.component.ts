import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhoneNumber } from 'Models/phone-number';
import { GlobalAccountService } from '../Services/global-account.service';
import { SNetbankingUserService } from '../Services/s-netbanking-user.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private obj: SNetbankingUserService,private globals:GlobalAccountService,private router:Router) { }

  // phoneNo:PhoneNumber={
  //   country:"+91",
  //   phNo:""
  // }

  // phNumber:string="";

  ngOnInit(): void {
  }
  ForgotPasswordForm = new FormGroup({

    Enter_User_Id: new FormControl(0,[Validators.required]),
  })
  onSubmit(){
    this.globals.GlobalUserId_Number=this.ForgotPasswordForm.controls.Enter_User_Id.value;
    console.log(this.globals.GlobalUserId_Number);
    console.log(this.ForgotPasswordForm.controls.Enter_User_Id.value);
    this.router.navigate(["/SetPassword"]);

  }

  // sendOTP(data:number){

  //   //console.log(this.ForgotPasswordForm.controls.Enter_User_Id.value);
  //   this.obj.getNetBankingByID(data).subscribe(res=>{
  //     this.obj.getAccountsByID(res.accountNumber).subscribe(resp=>{
  //       this.obj.getUserDetailsByID(resp.aadharCardNumber).subscribe(response=>{
  //         this.phoneNo.phNo=response.mobileNumber;

  //         this.phNumber=this.phoneNo.country+this.phoneNo.phNo;
  //         console.log(this.phNumber);
  //       })
  //     })
  //   })
  // }

}
