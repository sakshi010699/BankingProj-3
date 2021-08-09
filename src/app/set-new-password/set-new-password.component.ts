import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SSetNewPasswordService } from '../Services/sset-new-password.service';
import { NetBankingUserDetails } from 'Models/net-banking-user-details';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css']
})
export class SetNewPasswordComponent implements OnInit {
  u:NetBankingUserDetails[]=[];
  v:NetBankingUserDetails={
    UserId:0,
    AccountNumber:"",
    UserPassword:"",
    TransactionPass:""
  };
  u_msg:string="";
  update_id:number=0;


  constructor(private obj:SSetNewPasswordService) { }

  ngOnInit(): void {
  }
SetPasswordForm = new FormGroup({
  UserPassword: new FormControl("",[Validators.required]),
Confirm_Login_Password: new FormControl("",[Validators.required,accNumbercompare]),
UserId: new FormControl(),
AccountNumber: new FormControl(),
TransactionPass: new FormControl()



})
onSubmit(){
console.log(this.SetPasswordForm.value);

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
