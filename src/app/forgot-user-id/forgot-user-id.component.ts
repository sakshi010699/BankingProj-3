import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SNetbankingUserService } from '../Services/s-netbanking-user.service';
import { PhoneNumber } from 'Models/phone-number';
import { GlobalAccountService } from '../Services/global-account.service';
import { Router } from '@angular/router';
import { NetBankingUserDetails } from 'Models/net-banking-user-details';

@Component({
  selector: 'app-forgot-user-id',
  templateUrl: './forgot-user-id.component.html',
  styleUrls: ['./forgot-user-id.component.css']
})
export class ForgotUserIdComponent implements OnInit {
  NetBankingDetailsOfUser:NetBankingUserDetails[]=[];

  constructor(private obj:SNetbankingUserService,private globals:GlobalAccountService,private router:Router) { }

  // phNumber:PhoneNumber={
  //   country:"+91",
  //   phNo:""
  // }

  // phoneNo:string="";

  ngOnInit(): void {
  }
ForgotUserIdForm = new FormGroup({

Enter_Account_Number: new FormControl(0,[Validators.required]),
  })
  onSubmit(){
    this.obj.getNetBankingUserCredentials().subscribe(data=>{
      this.NetBankingDetailsOfUser=data;
      for(let item of this.NetBankingDetailsOfUser){
        if(item.accountNumber==this.ForgotUserIdForm.controls.Enter_Account_Number.value){
         
          alert("Your UserId is " + item.userId);
        }
      }
    })

  }

  // sendOTP(data:number)
  // {
  //   console.log(data);
  //   console.log("Hello! "+ this.ForgotUserIdForm.controls.Enter_User_Id.value);
  //   this.obj.getAccountsByID(data).subscribe(res=>{
  //     //this.aadharNoFetch.aadharCardNumber=res.aadharCardNumber;
  //     console.log(res.aadharCardNumber);

  //     this.obj.getUserDetailsByID(res.aadharCardNumber).subscribe(ress=>{
  //       this.phNumber.phNo=ress.mobileNumber;
  //       console.log(ress.mobileNumber);

  //       this.phoneNo=this.phNumber.country+this.phNumber.phNo;
  //       console.log(this.phoneNo);
  //     })
  //   })
  // }
}
