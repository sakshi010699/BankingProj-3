import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NetBankingUserDetails } from 'Models/net-banking-user-details';
import { SNetbankingUserService } from '../Services/s-netbanking-user.service';


@Component({
  selector: 'app-netbanking-register',
  templateUrl: './netbanking-register.component.html',
  styleUrls: ['./netbanking-register.component.css']
})
export class NetbankingRegisterComponent implements OnInit {

  allNetBankingUser : NetBankingUserDetails[]=[];

  NetBankingUser: NetBankingUserDetails={
    userId:0,
    accountNumber:0,
    userPassword:"",
    transactionPass:""
  };
  constructor(private obj:SNetbankingUserService) { }

  ngOnInit(): void {
  }

  netBankingReg = new FormGroup({
    accountNo : new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(4)]),
    setPass : new FormControl("", [Validators.required]),
    confirmPass : new FormControl("", [Validators.required,passwordcompare]),
    setTranPass : new FormControl("", [Validators.required]),
    confirmTranPass : new FormControl("", [Validators.required,tranPasswordcompare]),
    enterOtp : new FormControl("", [Validators.required])
  })
  onSubmit() {
    console.log(this.netBankingReg.value);
  }

  generate_credentials(data:any):void
  {
    this.NetBankingUser.accountNumber = data.accountNo;
    this.NetBankingUser.userPassword = data.setPass;
    this.NetBankingUser.transactionPass = data.setTranPass; 
    this.obj.createNetBankingCredentials(this.NetBankingUser).subscribe(data=>{
    //Logging the response received from web api.
    console.log(data);
    })
  }



}
export function passwordcompare(control:AbstractControl):any{
  let controlvalue:string=control.value;
  let comparevalue:string=control.root.get("setPass")?.value;
  if(!(controlvalue==comparevalue))
 {
  return {'errors':true}
 }
}

export function tranPasswordcompare(control:AbstractControl):any{
  let controlvalue:string=control.value;
  let comparevalue:string=control.root.get("setTranPass")?.value;
  if(!(controlvalue==comparevalue))
 {
  return {'errors':true}
 }
}