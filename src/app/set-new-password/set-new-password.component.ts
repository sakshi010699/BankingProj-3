import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SSetNewPasswordService } from '../Services/sset-new-password.service';
import { NetBankingUserDetails } from 'Models/net-banking-user-details';
import { SNetbankingUserService } from '../Services/s-netbanking-user.service';
import { GlobalsService } from '../globals.service';
import { GlobalAccountService } from '../Services/global-account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css']
})
export class SetNewPasswordComponent implements OnInit {
  u:NetBankingUserDetails[]=[];
  v:NetBankingUserDetails={
    userId:0,
    accountNumber:0,
    userPassword:"",
    transactionPass:""
  };
  u_msg:string="";
  update_id:number=0;


  constructor(private obj:SSetNewPasswordService,private obj1:SNetbankingUserService,
    private router:Router, private globals:GlobalAccountService) { }

  ngOnInit(): void {
  }
SetPasswordForm = new FormGroup({
  UserPassword: new FormControl("",[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
Confirm_Login_Password: new FormControl("",[Validators.required,accNumbercompare])



})


SetNewPassword(){
  this.obj1.getNetBankingByID(this.globals.GlobalUserId_Number).subscribe(data=>
    {
      data.userPassword=this.SetPasswordForm.controls.UserPassword.value;
      this.obj.updateUser(this.globals.GlobalUserId_Number,data).subscribe(data=>{
        this.u_msg="Successfully updated user details "+this.globals.GlobalUserId_Number;
        console.log(data);
      })
     
      alert("Password has been updated Successfully");
    })

}

routeToRelevant(){
   if(this.globals.GlobalAadharCard_Number=="")
   this.router.navigate(["/LoginComponent"]);
   else
   this.router.navigate(["/UserDashboard"]);
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
