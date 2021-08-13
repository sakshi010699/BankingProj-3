import { Component, OnInit } from '@angular/core';
import { SadminApproveService } from '../Services/sadmin-approve.service';
import { UserOpenAccount } from 'Models/user-open-account';
import { NetBankingUserDetails } from 'Models/net-banking-user-details';
import { AccountDetails } from 'Models/account-details';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  appendAccount:AccountDetails={
    accountNumber:0,
    aadharCardNumber:"",
    accountType:"",
    accountBalance:0
  }

  netBankingData:NetBankingUserDetails={
    userId:0,
    accountNumber:"",
    userPassword:"",
    transactionPass:""
  }

  allUser : UserOpenAccount[]=[];

  User : UserOpenAccount={
    aadharCardNumber:"",
    title:"",
    firstName:"",
    middleName:"",
    lastName:"",
    fathersName:"",
    mobileNumber:"",
    emailId:"",
    dateOfBirth:new Date(),
    residentialAddrLine1:"",
    residentialAddrLine2:"",
    residentialLandmark:"",
    residentialPincode:"",
    permEqualRes:false,
    
    occupationType:"",
    sourceOfIncome:"",
    grossAnnualIncome:"",
    debitCard:false,
    netBanking:false,
    approvalStatus:false
  };
  constructor(private obj:SadminApproveService) { }

  ngOnInit(): void {
    this.get_api();
  }

  get_api():void
  {
      this.obj.getAllUsers().subscribe(data=>{
        this.allUser=data;
        //Logging the response recieved from web api.
        console.log(this.allUser);
      });
  }

  approve(item:UserOpenAccount){

    this.obj.getUserAccountById(item.aadharCardNumber)
    .subscribe(
    data => {
   
    item.approvalStatus=true;
    this.obj.updateAccount(item.aadharCardNumber,item).subscribe(data=>{
    })
    })

    this.appendAccount.aadharCardNumber=item.aadharCardNumber;
    this.appendAccount.accountType="Savings";
    this.appendAccount.accountBalance=10000;

    this.obj.createAccount(this.appendAccount).subscribe(data=>{
      

    })

    

    /* if(item.netBanking==true){
      this.netBankingData.accountNumber=item
      this.obj.createNetBanking(this.netBankingData).subscribe(data=>{
        
      })
    } */

    }
    
  
  notapprove(item:UserOpenAccount){
    this.obj.deleteUser(item.aadharCardNumber).subscribe(data => {
      item.approvalStatus = false;
    })
  }
}
