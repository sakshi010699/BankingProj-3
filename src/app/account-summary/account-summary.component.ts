import { Component, OnInit } from '@angular/core';
import { UserTransaction } from 'Models/user-transaction';
import { STransactionService } from '../Services/stransaction.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {
 UserAccountNumber:any=0;
 isHidden:boolean=true;
 UserTransactionRecord:UserTransaction[]=[];

  constructor(private obj:STransactionService) { }

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
