import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SSetNewTranPassswordService } from '../Services/sset-new-tran-passsword.service';
import { NetBankingUserDetails } from 'Models/net-banking-user-details';
import { SNetbankingUserService } from '../Services/s-netbanking-user.service';
import { GlobalAccountService } from '../Services/global-account.service';

@Component({
  selector: 'app-set-new-tran-pasword',
  templateUrl: './set-new-tran-pasword.component.html',
  styleUrls: ['./set-new-tran-pasword.component.css']
})
export class SetNewTranPaswordComponent implements OnInit {
  u:NetBankingUserDetails[]=[];
  v:NetBankingUserDetails={
    userId:0,
    accountNumber:0,
    userPassword:"",
    transactionPass:""
  };
  u_msg:string="";


  constructor(private obj:SSetNewTranPassswordService,private obj1:SNetbankingUserService,private globals:GlobalAccountService) { }

  ngOnInit(): void {
  }
  SetNewTranPasswordForm = new FormGroup({
   
    TransactionPass: new FormControl(),
    
    Confirm_Transaction_Password:new FormControl("",[Validators.required,tranpasscompare])
    
    })
    


    SetNewTransactionPassword(){
      this.obj1.getNetBankingByID(this.globals.GlobalUserId_Number).subscribe(data=>
        {
          data.transactionPass=this.SetNewTranPasswordForm.controls.TransactionPass.value;
          this.obj.updateUser(this.globals.GlobalUserId_Number,data).subscribe(data=>{
            this.u_msg="Successfully updated user details "+this.globals.GlobalUserId_Number;
            console.log(data);
          })
         
          alert("Password has been updated Successfully");
        })
    
    }

}

export function accNumbercompare(control:AbstractControl):any{
  let controlvalue:string=control.value;
  let comparevalue:string=control.root.get("UserPassword")?.value;
  if(!(controlvalue==comparevalue))
 {
  return {'errors':true}
 }
}
export function tranpasscompare(control:AbstractControl):any{
  let controlvalue:string=control.value;
  let comparevalue:string=control.root.get("TransactionPass")?.value;
  if(!(controlvalue==comparevalue))
 {
  return {'errors':true}
 }
}

