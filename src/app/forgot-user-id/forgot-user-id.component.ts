import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SNetbankingUserService } from '../Services/s-netbanking-user.service';
import { PhoneNumber } from 'Models/phone-number';

@Component({
  selector: 'app-forgot-user-id',
  templateUrl: './forgot-user-id.component.html',
  styleUrls: ['./forgot-user-id.component.css']
})
export class ForgotUserIdComponent implements OnInit {

  constructor(private obj:SNetbankingUserService) { }

  phNumber:PhoneNumber={
    country:"+91",
    phNo:""
  }

  phoneNo:string="";

  ngOnInit(): void {
  }
ForgotUserIdForm = new FormGroup({

Enter_User_Id: new FormControl(0,[Validators.required]),
    Enter_OTP : new FormControl("",[Validators.required])
  })
  onSubmit(){
    console.log(this.ForgotUserIdForm.value);
  }

  sendOTP(data:number)
  {
    console.log(data);
    console.log("Hello! "+ this.ForgotUserIdForm.controls.Enter_User_Id.value);
    this.obj.getAccountsByID(data).subscribe(res=>{
      //this.aadharNoFetch.aadharCardNumber=res.aadharCardNumber;
      console.log(res.aadharCardNumber);

      this.obj.getUserDetailsByID(res.aadharCardNumber).subscribe(ress=>{
        this.phNumber.phNo=ress.mobileNumber;
        console.log(ress.mobileNumber);

        this.phoneNo=this.phNumber.country+this.phNumber.phNo;
        console.log(this.phoneNo);
      })
    })
  }
}
