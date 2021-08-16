import { Component, OnInit } from '@angular/core';
import { UserTransaction } from 'Models/user-transaction';
import { GlobalAccountService } from '../Services/global-account.service';
import { STransactionService } from '../Services/stransaction.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {
 UserAccountNumber:number= this.global.GlobalAcc_Number;
 isHidden:boolean=true;
 UserTransactionRecord:UserTransaction[]=[];

  constructor(private obj:STransactionService, public global : GlobalAccountService) { }

  ngOnInit(): void {
  }

  


  GetAccountSummary():void
  {
    this.obj.getAllTransactionDetails().subscribe(data=>{
      console.log(data);
      
      this.UserTransactionRecord=data;
      console.log(this.UserTransactionRecord);
      this.isHidden=false;
      //Logging the response recieved from web api.
     // console.log(this.UserTransactionRecord);
    });
  }

}
