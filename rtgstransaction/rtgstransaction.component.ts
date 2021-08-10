import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserTransaction } from 'Models/user-transaction';
import { STransactionService } from '../Services/stransaction.service';
import { AccountDetails } from 'Models/account-details';


@Component({
  selector: 'app-rtgstransaction',
  templateUrl: './rtgstransaction.component.html',
  styleUrls: ['./rtgstransaction.component.css']
})

export class RTGSTransactionComponent implements OnInit {
  FromAccountBalance:AccountDetails={
    AccountNumber:0,
    AadharCardNumber:"",
    AccountType:"",
    AccountBalance:0
  }

  ToAccountBalance:AccountDetails={
    AccountNumber:0,
    AadharCardNumber:"",
    AccountType:"",
    AccountBalance:0
  }
  a:number=0;



  Transaction:UserTransaction={
    TransactionID:0,
    AccountNumber:0,
    TransactionDate:new Date(),
    TransactionType:"",
    AccountBalance:0,
    Remark:""
  }

  Transaction1:UserTransaction={
    TransactionID:0,
    AccountNumber:0,
    TransactionDate:new Date(),
    TransactionType:"",
    AccountBalance:0,
    Remark:""
  }
  u_msg:string="";

  constructor(private obj:STransactionService) { }

  ngOnInit(): void {
  }

  RTGSForm = new FormGroup({
  From_Account: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
  To_Account : new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
  Amount : new FormControl(""),
  Transaction_Date : new FormControl(""),
  Maturity_Instructions : new FormControl(),
  Remark : new FormControl()

  })
  
  post_update_api(data:any):void{
    console.log(data.From_Account);

    
      this.obj.getAccountDetailsById(data.From_Account)
        .subscribe(
          data => {
            this.FromAccountBalance.AccountBalance = data.accountBalance- this.RTGSForm.controls.Amount.value;
            console.log("data",data);
            console.log(data.accountBalance);
            console.log(this.FromAccountBalance.AccountBalance);
            
          });
          console.log("Hello"+this.FromAccountBalance);
          console.log(this.Transaction);
          this.Transaction.AccountNumber = this.RTGSForm.controls.From_Account.value;
          this.Transaction.TransactionDate=this.RTGSForm.controls.Transaction_Date.value;
          this.Transaction.TransactionType="RTGS Debit";
          this.Transaction.AccountBalance= this.FromAccountBalance.AccountBalance;
          this.Transaction.Remark=this.RTGSForm.controls.Remark.value;
      console.log(this.Transaction);


    this.obj.createTransaction(this.Transaction).subscribe(response=>{
      
      
    })   



    this.obj.getAccountDetailsById(data.To_Account)
        .subscribe(
          data => {
            this.ToAccountBalance.AccountBalance = data.accountBalance - (- this.RTGSForm.controls.Amount.value);
            console.log("data",data);
            console.log(data.accountBalance);

            
          });
          console.log("Hello"+this.ToAccountBalance);
          console.log(this.Transaction1);
          this.Transaction1.AccountNumber = this.RTGSForm.controls.To_Account.value;
          this.Transaction1.TransactionDate=this.RTGSForm.controls.Transaction_Date.value;
          this.Transaction1.TransactionType="RTGS Credit";
          this.Transaction1.AccountBalance= this.ToAccountBalance.AccountBalance;
          this.Transaction1.Remark=this.RTGSForm.controls.Remark.value;
      console.log(this.Transaction1);


    this.obj.createTransaction(this.Transaction1).subscribe(response=>{
      
      
    })
    

      
 	


   
 	 
 	 
 	
    
    
    
    
    
  }


 
  
}
