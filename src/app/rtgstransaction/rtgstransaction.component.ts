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


  Transaction:UserTransaction={
    TransactionID:0,
    AccountNumber:0,
    TransactionDate:new Date(),
    TransactionType:"",
    AccountBalance:0,
    Remark:""
  }

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
  onSubmit(){
    console.log(this.RTGSForm.value);
  }


  post_update_api(data:any):void{

    this.obj.getAccountDetailsById(data).subscribe(data=>{
    this.FromAccountBalance.AccountBalance = data.AccountBalance;});


    this.obj.createTransaction(data).subscribe(data=>{
      this.Transaction.AccountNumber=this.RTGSForm.controls.From_Account.value;
      this.Transaction.TransactionDate=this.RTGSForm.controls.TransactionDate.value;
      this.Transaction.TransactionType="RTGS Debit";
      this.Transaction.AccountBalance=this.FromAccountBalance.AccountBalance - this.RTGSForm.controls.Amount.value;
      this.Transaction.Remark=this.RTGSForm.controls.Remark.value;
    })    
    
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
