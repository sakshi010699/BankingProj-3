import { Component, OnInit } from '@angular/core';
import { UserTransaction } from 'Models/user-transaction';
import { STransactionService } from '../Services/stransaction.service';
import { AccountDetails } from 'Models/account-details';
import { UserOpenAccount } from 'Models/user-open-account';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {
  Account:AccountDetails[]=[];
  Transaction:UserTransaction[]=[];
  OpenAccount:UserOpenAccount[]=[];


  UserAccountNumber:number=0;
 UserDate:Date=new Date();


  constructor() { }

  ngOnInit(): void {
  }

  GetAccountStatement(){
    

  }

  FilterByDate(){}

}
