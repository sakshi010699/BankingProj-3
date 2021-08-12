import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { STransactionService } from '../Services/stransaction.service';
import { AccountDetails } from 'Models/account-details';
import { UserTransaction } from 'Models/user-transaction';
import { BeneficiaryDetails } from 'Models/beneficiary-details';

@Component({
  selector: 'app-nefttransaction',
  templateUrl: './nefttransaction.component.html',
  styleUrls: ['./nefttransaction.component.css']
})
export class NEFTTransactionComponent implements OnInit {
  FromAccountBalance:AccountDetails={
    AccountNumber:0,
    AadharCardNumber:"",
    AccountType:"",
    AccountBalance:0
  }
  p:number=0;
  q:number=0;

  ToAccountBalance:AccountDetails={
    AccountNumber:0,
    AadharCardNumber:"",
    AccountType:"",
    AccountBalance:0
  }
  acc:AccountDetails={
    AccountNumber:0,
    AadharCardNumber:"",
    AccountType:"",
    AccountBalance:0
  }
  acc1:AccountDetails={
    AccountNumber:0,
    AadharCardNumber:"",
    AccountType:"",
    AccountBalance:0
  }
  a:number=0;




  Transaction:UserTransaction={
    transactionId:0,
    accountNumber:0,
    transactionDate:new Date(),
    transactionType:"",
    accountBalance:0,
    remark:""
  }

  Transaction1:UserTransaction={
    transactionId:0,
    accountNumber:0,
    transactionDate:new Date(),
    transactionType:"",
    accountBalance:0,
    remark:""
  }
  u_msg:string="";
  m:any;

 
  constructor(private obj:STransactionService) { }

  ngOnInit(): void {
  }

  NEFTForm=new FormGroup({
    From_Account:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
    To_Account : new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
    Amount : new FormControl("",[Validators.required]),
    Transaction_Date : new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
    Remark : new FormControl("",[Validators.required])


  })

  post_update_api(data:any):void{
    console.log(data.From_Account);

    
      this.obj.getAccountDetailsById(data.From_Account)
        .subscribe(
          data => {
            this.FromAccountBalance.AccountBalance = data.accountBalance- this.NEFTForm.controls.Amount.value;
            //console.log("data",data);
            //console.log(data.accountBalance);
            //console.log(this.FromAccountBalance.AccountBalance);
            //console.log("Hello"+this.FromAccountBalance);
           // console.log(this.Transaction);
            this.Transaction.accountNumber = this.NEFTForm.controls.From_Account.value;
            this.Transaction.transactionDate=this.NEFTForm.controls.Transaction_Date.value;
            this.Transaction.transactionType="NEFT Debit";
            this.Transaction.accountBalance= this.FromAccountBalance.AccountBalance;
            this.Transaction.remark=this.NEFTForm.controls.Remark.value;
        //console.log(this.Transaction);
  
  
      this.obj.createTransaction(this.Transaction).subscribe(response=>{
        
        
      })  
            
          });
     



    this.obj.getAccountDetailsById(data.To_Account)
        .subscribe(
          data => {
            this.ToAccountBalance.AccountBalance = data.accountBalance - (- this.NEFTForm.controls.Amount.value);
            //console.log("data",data);
           // console.log(data.accountBalance);
           // console.log("Hello"+this.ToAccountBalance);
          //console.log(this.Transaction1);
          this.Transaction1.accountNumber = this.NEFTForm.controls.To_Account.value;
          this.Transaction1.transactionDate=this.NEFTForm.controls.Transaction_Date.value;
          this.Transaction1.transactionType="NEFT Credit";
          this.Transaction1.accountBalance= this.ToAccountBalance.AccountBalance;
          this.Transaction1.remark=this.NEFTForm.controls.Remark.value;
      //console.log(this.Transaction1);


    this.obj.createTransaction(this.Transaction1).subscribe(response=>{
      
      
    })

            
          });
    
   
this.p=data.To_Account;
this.q=data.From_Account;
    this.obj.getAccountDetailsById(data.To_Account)
    .subscribe(
      data => {

        this.acc.AadharCardNumber=data.aadharCardNumber;
        this.acc.AccountBalance=this.ToAccountBalance.AccountBalance;
        this.acc.AccountNumber=data.accountNumber;
        this.acc.AccountType=data.accountType;
        console.log(this.acc);

        this.obj.updateAccount(this.p,this.acc).subscribe(data=>{
      
        })
      
      })
      
      this.obj.getAccountDetailsById(data.From_Account)
    .subscribe(
      data => {

        this.acc1.AadharCardNumber=data.aadharCardNumber;
        this.acc1.AccountBalance=this.FromAccountBalance.AccountBalance;
        this.acc1.AccountNumber=data.accountNumber;
        this.acc1.AccountType=data.accountType;
        console.log(this.acc);

        this.obj.updateAccount(this.q,this.acc1).subscribe(data=>{
      
        })
      
      })

  }
  
}
