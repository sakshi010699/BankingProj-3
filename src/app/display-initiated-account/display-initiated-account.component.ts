import { Component, OnInit } from '@angular/core';
import { NetBankingUserDetails } from 'Models/net-banking-user-details';
import { SNetbankingUserService } from '../Services/s-netbanking-user.service';
import { AccountDetails } from 'Models/account-details';
import { GlobalAccountService } from '../Services/global-account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-initiated-account',
  templateUrl: './display-initiated-account.component.html',
  styleUrls: ['./display-initiated-account.component.css']
})
export class DisplayInitiatedAccountComponent implements OnInit {
  AadharCardNumberOfUser:string="";
  userId:number=0;
  accountNumber:number=0;
  userPassword:string="";
  transactionPass:string="";
  AccountNumberOfUser:number=0;
  
  isHidden1:boolean=true;
  AccountDetailsOfUser:AccountDetails[]=[];
  NetBankingDetailsOfUser:NetBankingUserDetails[]=[];
  

  constructor(private obj:SNetbankingUserService, private global:GlobalAccountService, private router:Router) 
  { }

  ngOnInit(): void {
  }

  GetAccountDetails(){
    this.obj.getAccountDetails().subscribe(data=>{
     
    this.AccountDetailsOfUser=data;
    for(let item of this.AccountDetailsOfUser){
      if(item.aadharCardNumber==this.AadharCardNumberOfUser){
        this.AccountNumberOfUser=item.accountNumber;
        this.obj.getNetBankingUserCredentials().subscribe(data=>{
          this.NetBankingDetailsOfUser=data;
          for(let item1 of this.NetBankingDetailsOfUser){
            if(item1.accountNumber==this.AccountNumberOfUser){
              this.userId=item1.userId;
              this.accountNumber=item1.accountNumber;
              this.userPassword=item1.userPassword;
              this.transactionPass=item1.transactionPass;

            }
          }

        })

      }
    }
    
    })
    this.isHidden1=false;
  }

  returnToLogin(){
    this.global.GlobalAadharCard_Number="";
    this.global.GlobalUserId_Number=0;
    this.global.GlobalUser_Name="";
    this.global.GlobalAcc_Number=0;
    this.router.navigate(["/LoginComponent"]);
  }


  
}
