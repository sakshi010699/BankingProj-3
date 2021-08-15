import { Component, OnInit } from '@angular/core';
import { UserTransaction } from 'Models/user-transaction';
import { STransactionService } from '../Services/stransaction.service';
import { AccountDetails } from 'Models/account-details';
import { UserOpenAccount } from 'Models/user-open-account';
import { GlobalAccountService } from '../Services/global-account.service';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {

  UserAccountNumber:number = this.global.GlobalAcc_Number;

  isHidden:boolean=true;


  UserTransactionRecord:UserTransaction[]=[];
  
  UserDateFrom:Date=new Date();
  UserDateTill:Date=new Date();

  constructor(private obj:STransactionService, public global : GlobalAccountService) { }

  ngOnInit(): void {
  }

  GetAccountStatement(){
  
    this.obj.getAllTransactionDetails().subscribe(data=>{
      console.log(data);
      for(let d of data){
        if(d.accountNumber==this.UserAccountNumber && (d.transactionDate <this.UserDateTill || d.transactionDate == this.UserDateTill && (d.transactionDate >= this.UserDateFrom))){
          this.UserTransactionRecord.push(d);
        }
      }
      //this.UserTransactionRecord=data;
      console.log(this.UserTransactionRecord);
      this.isHidden=false;

      //Logging the response recieved from web api.
     // console.log(this.UserTransactionRecord);
    });

  }
}
