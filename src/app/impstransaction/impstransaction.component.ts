import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountDetails } from '../account-details';
import { STransactionService } from '../Services/stransaction.service';



@Component({
  selector: 'app-impstransaction',
  templateUrl: './impstransaction.component.html',
  styleUrls: ['./impstransaction.component.css']
})
export class IMPSTransactionComponent implements OnInit {
  a:AccountDetails[]=[];

  b:AccountDetails={
    AccountNumber:0,
    AadharCardNumber:"",
    AccountType:"",
    AccountBalance:""
  };
  u_msg:string="";
  

  constructor(private obj:STransactionService) { }

  ngOnInit(): void {
  }

  IMPSForm = new FormGroup({

    From_Account : new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
    To_Account : new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
    
    Amount : new FormControl("",[Validators.required]),
    Transaction_Date : new FormControl("",[Validators.required]),
    Maturity_Instructions : new FormControl("",[Validators.required]),
    Remark : new FormControl("",[Validators.required]),

  }

  )
  onSubmit(){
  console.log(this.IMPSForm.value);

  }
  put_api(id:number,data:any):void
  {
    this.obj.updateUser(id,data).subscribe(data=>{
      this.u_msg="Successfully updated player with jersey "+id;
      console.log(data);
    })
   

  }


}
