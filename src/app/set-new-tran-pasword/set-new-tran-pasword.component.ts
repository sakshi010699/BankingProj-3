import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SSetNewTranPassswordService } from '../Services/sset-new-tran-passsword.service';
import { NetBankingUserDetails } from 'Models/net-banking-user-details';

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


  constructor(private obj:SSetNewTranPassswordService) { }

  ngOnInit(): void {
  }
  SetNewTranPasswordForm = new FormGroup({
    UserPassword: new FormControl("",[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,16}')]),
    Confirm_Login_Password: new FormControl("",[Validators.required,accNumbercompare]),
    UserId: new FormControl(),
    AccountNumber: new FormControl(),
    TransactionPass: new FormControl(),
    
    Confirm_Transaction_Password:new FormControl("",[Validators.required,tranpasscompare])
    
    })
    onSubmit(){
      console.log(this.SetNewTranPasswordForm.value);
    }
    put_api(id:number,data:any):void
  {
    this.obj.updateUser(id,data).subscribe(data=>{
      this.u_msg="Successfully updated user details "+id;
      console.log(data);
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

