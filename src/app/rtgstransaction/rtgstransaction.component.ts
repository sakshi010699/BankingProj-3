import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserTransaction } from 'Models/user-transaction';
import { STransactionService } from '../Services/stransaction.service';
import { AccountDetails } from 'Models/account-details';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { BeneficiaryDetails } from 'Models/beneficiary-details';

@Component({
  selector: 'app-rtgstransaction',
  templateUrl: './rtgstransaction.component.html',
  styleUrls: ['./rtgstransaction.component.css']
})

export class RTGSTransactionComponent implements OnInit {
  isHidden1:boolean=true;
  isHidden2:boolean=false;
  UserBeneficiary:BeneficiaryDetails[]=[];
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
    
    this.obj.getAllUsers().subscribe(data=>{
      this.UserBeneficiary=data;
    });
  
  }

  RTGSForm = new FormGroup({
  From_Account: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
  To_Account : new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
  Amount : new FormControl(""),
  Transaction_Date : new FormControl(""),
  Maturity_Instructions : new FormControl(),
  Remark : new FormControl()

  })

  // TransactionReceiptRTGS= new FormGroup({

    
  //    ReferenceId: new FormControl(Math.floor(Math.random() * (10000000 - 10000 + 1)) + 10000),
  //    Mode:new FormControl("RTGS"),
  //    Paid_To_Account:new FormControl(this.RTGSForm.controls.To_Account.value),
  //    Amount:new FormControl(this.RTGSForm.controls.From_Account.value),
  //    From_Account: new FormControl(this.RTGSForm.controls.From_Account.value),
  //    On:new FormControl(this.RTGSForm.controls.Transaction_Date.value),
  //    Remarks:new FormControl(this.RTGSForm.controls.Remark.value)   
  // })
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
            this.FromAccountBalance.AccountBalance = data.accountBalance- this.RTGSForm.controls.Amount.value;
            //console.log("data",data);
            //console.log(data.accountBalance);
            //console.log(this.FromAccountBalance.AccountBalance);
            //console.log("Hello"+this.FromAccountBalance);
           // console.log(this.Transaction);
            this.Transaction.accountNumber = this.RTGSForm.controls.From_Account.value;
            this.Transaction.transactionDate=this.RTGSForm.controls.Transaction_Date.value;
            this.Transaction.transactionType="RTGS Debit";
            this.Transaction.accountBalance= this.FromAccountBalance.AccountBalance;
            this.Transaction.remark=this.RTGSForm.controls.Remark.value;
        //console.log(this.Transaction);
  
  
      this.obj.createTransaction(this.Transaction).subscribe(response=>{
        
        
      })  
            
          });
     



    this.obj.getAccountDetailsById(data.To_Account)
        .subscribe(
          data => {
            this.ToAccountBalance.AccountBalance = data.accountBalance - (- this.RTGSForm.controls.Amount.value);
            //console.log("data",data);
           // console.log(data.accountBalance);
           // console.log("Hello"+this.ToAccountBalance);
          //console.log(this.Transaction1);
          this.Transaction1.accountNumber = this.RTGSForm.controls.To_Account.value;
          this.Transaction1.transactionDate=this.RTGSForm.controls.Transaction_Date.value;
          this.Transaction1.transactionType="RTGS Credit";
          this.Transaction1.accountBalance= this.ToAccountBalance.AccountBalance;
          this.Transaction1.remark=this.RTGSForm.controls.Remark.value;
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
      this.isHidden1=false;
      this.isHidden2=true;

    
    
    
  }
  
}


/*
this.employeeService.getEmployeeById(employeeId).subscribe(employee=> {  
      this.massage = null;  
      this.dataSaved = false;  
      this.employeeIdUpdate = employee.EmpId;  
      this.employeeForm.controls['EmpName'].setValue(employee.EmpName);  
      this.employeeForm.controls['DateOfBirth'].setValue(employee.DateOfBirth);  
      this.employeeForm.controls['EmailId'].setValue(employee.EmailId);  
      this.employeeForm.controls['Gender'].setValue(employee.Gender);  
      this.employeeForm.controls['Address'].setValue(employee.Address);  
      this.employeeForm.controls['PinCode'].setValue(employee.PinCode);  
    });  

*/
