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
  isHidden1:boolean=true;
  isHidden2:boolean=false;
  FromAccountBalance:AccountDetails={
    accountNumber:0,
    aadharCardNumber:"",
    accountType:"",
    accountBalance:0
  }
  p:number=0;
  q:number=0;

  ToAccountBalance:AccountDetails={
    accountNumber:0,
    aadharCardNumber:"",
    accountType:"",
    accountBalance:0
  }
  acc:AccountDetails={
    accountNumber:0,
    aadharCardNumber:"",
    accountType:"",
    accountBalance:0
  }
  acc1:AccountDetails={
    accountNumber:0,
    aadharCardNumber:"",
    accountType:"",
    accountBalance:0
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
  ReceiptReferenceId:number=Math.floor(Math.random() * (10000000 - 10000 + 1)) + 10000;
  ReceiptMode:string="RTGS";
  ReceiptToAccount:number=0;
  ReceiptAmount:number=0;
  RecieptFromAccount:number=0;
  ReceiptOn:Date=new Date();
  ReceiptRemarks:string="";

  post_update_api(data:any):void{
    console.log(data.From_Account);
    this.ReceiptToAccount=data.To_Account;
   this.ReceiptAmount=data.Amount;
   this.RecieptFromAccount=data.From_Account;
   this.ReceiptOn=data.Transaction_Date;
   this.ReceiptRemarks=data.Remark;

    
      this.obj.getAccountDetailsById(data.From_Account)
        .subscribe(
          data => {
            this.FromAccountBalance.accountBalance = data.accountBalance- this.NEFTForm.controls.Amount.value;
            //console.log("data",data);
            //console.log(data.accountBalance);
            //console.log(this.FromAccountBalance.AccountBalance);
            //console.log("Hello"+this.FromAccountBalance);
           // console.log(this.Transaction);
            this.Transaction.accountNumber = this.NEFTForm.controls.From_Account.value;
            this.Transaction.transactionDate=this.NEFTForm.controls.Transaction_Date.value;
            this.Transaction.transactionType="NEFT Debit";
            this.Transaction.accountBalance= this.FromAccountBalance.accountBalance;
            this.Transaction.remark=this.NEFTForm.controls.Remark.value;
        //console.log(this.Transaction);
  
  
      this.obj.createTransaction(this.Transaction).subscribe(response=>{
        
        
      })  
            
          });
     



    this.obj.getAccountDetailsById(data.To_Account)
        .subscribe(
          data => {
            this.ToAccountBalance.accountBalance = data.accountBalance - (- this.NEFTForm.controls.Amount.value);
            //console.log("data",data);
           // console.log(data.accountBalance);
           // console.log("Hello"+this.ToAccountBalance);
          //console.log(this.Transaction1);
          this.Transaction1.accountNumber = this.NEFTForm.controls.To_Account.value;
          this.Transaction1.transactionDate=this.NEFTForm.controls.Transaction_Date.value;
          this.Transaction1.transactionType="NEFT Credit";
          this.Transaction1.accountBalance= this.ToAccountBalance.accountBalance;
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

        this.acc.aadharCardNumber=data.aadharCardNumber;
        this.acc.accountBalance=this.ToAccountBalance.accountBalance;
        this.acc.accountNumber=data.accountNumber;
        this.acc.accountType=data.accountType;
        console.log(this.acc);

        this.obj.updateAccount(this.p,this.acc).subscribe(data=>{
      
        })
      
      })
      
      this.obj.getAccountDetailsById(data.From_Account)
    .subscribe(
      data => {

        this.acc1.aadharCardNumber=data.aadharCardNumber;
        this.acc1.accountBalance=this.FromAccountBalance.accountBalance;
        this.acc1.accountNumber=data.accountNumber;
        this.acc1.accountType=data.accountType;
        console.log(this.acc);

        this.obj.updateAccount(this.q,this.acc1).subscribe(data=>{
      
        })
      
      })
      this.isHidden1=false;
      this.isHidden2=true;

  }
  
}
