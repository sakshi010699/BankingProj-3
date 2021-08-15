import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NetBankingUserDetails } from 'Models/net-banking-user-details';
import { SNetbankingUserService } from '../Services/s-netbanking-user.service';
//import { AngularFireModule } from '@angular/fire';
//import { AngularFireAuthModule } from "@angular/fire/auth";
//import { environment } from 'src/environments/environment';
//import { SWindowService } from '../Services/s-window.service';
//import * as firebase from 'firebase';
import { PhoneNumber } from 'Models/phone-number';
import { AccountDetails } from 'Models/account-details';



@Component({
  selector: 'app-netbanking-register',
  templateUrl: './netbanking-register.component.html',
  styleUrls: ['./netbanking-register.component.css']
})
export class NetbankingRegisterComponent implements OnInit {

  allNetBankingUser : NetBankingUserDetails[]=[];
  verificationCode:string="";

  NetBankingUser: NetBankingUserDetails={
    userId:0,
    accountNumber:0,
    userPassword:"",
    transactionPass:""
  };

  //windowRef:any;

  phNumber:PhoneNumber={
    country:"+91",
    phNo:""
  }

  phoneNo:string="";

  aadharNoFetch:AccountDetails={
    aadharCardNumber:"",
    accountNumber:0,
    accountType:"",
    accountBalance:0
  }

  /* constructor(private obj:SNetbankingUserService, private win:SWindowService,
    public afAuth:AngularFireAuthModule,
    private winService:SWindowService)  { 
      this.windowRef=this.winService.windowRef;
    } */

    constructor(private obj:SNetbankingUserService){}

  

  ngOnInit(): void {
    //this.windowRef=this.win.windowRef;
 
  }

  netBankingReg = new FormGroup({
    accountNo : new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(4)]),
    setPass : new FormControl("", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,16}')]),
    confirmPass : new FormControl("", [Validators.required,passwordcompare]),
    setTranPass : new FormControl("", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,16}')]),
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

  getPhoneNo(data:number){
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

    //const appVerifier = this.windowRef.recaptchaVerifier;

    
  }

  sendOTP(){
    /*this.phoneNo=this.phNumber.country+this.phNumber.phNo;
    console.log(this.phoneNo);*/

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