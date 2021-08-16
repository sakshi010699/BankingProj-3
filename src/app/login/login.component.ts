import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NetBankingUserDetails } from 'Models/net-banking-user-details';
import { GlobalAccountService } from '../Services/global-account.service';
import { SNetbankingUserService } from '../Services/s-netbanking-user.service';
import { STransactionService } from '../Services/stransaction.service';
import { UserOpenAccount2Service } from '../Services/user-open-account2.service';
import { AdminRouteGuard } from '../admin-route.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {


  allNetBankingUsers: NetBankingUserDetails[]=[];

  NetBankingUser: NetBankingUserDetails={
    userId:0,
    accountNumber:0,
    userPassword:"",
    transactionPass:""
  };
  constructor(private obj:SNetbankingUserService,
     private router:Router,
      private global : GlobalAccountService,
       private obj1:STransactionService,
       private obj2:UserOpenAccount2Service,
       private obj3:AdminRouteGuard) { }


  ngOnInit(): void {

    this.getAllUserCredentials();

  }
  LoginForm= new FormGroup({
    UserId : new FormControl("",[Validators.required]),
    Password : new FormControl("",[Validators.required])
  })

  validateBool : boolean = false;
  loginCounter : number = 0;

  userValidate(data:any){
    console.log("Hello");
    console.log(data.value);

    for(let item of this.allNetBankingUsers){
      if(item.userId == data.UserId){
        this.validateBool = true;
        if(item.userPassword == data.Password){
          this.global.GlobalAcc_Number = item.accountNumber;
          console.log(this.global.GlobalAcc_Number);

         
          this.obj1.getAccountDetailsById(item.accountNumber).subscribe(data =>{
            this.global.GlobalAadharCard_Number = data.aadharCardNumber;
            console.log(this.global.GlobalAadharCard_Number);
            this.obj2.getUserOpenAccountDetailsById(this.global.GlobalAadharCard_Number).subscribe(data => {
              this.global.GlobalUser_Name = data.firstName;
              this.global.GlobalUserId_Number=this.LoginForm.controls.UserId.value;
              console.log(this.global.GlobalUser_Name);
            })
          })
          

          this.router.navigate(["/UserDashboard"]);  
          //return this.temprouter="/UserDashboard";
        }
        else{
          this.loginCounter +=1;
          alert("Wrong Password please try again.");
          if(this.loginCounter == 3){
            this.loginCounter = 0;
            return alert('Your Account is Locked. Please use Forgot Password');
          }
          
        }
      }
     
    }
    if(this.validateBool==false){
      return alert('Wrong User Id');
    }
    
    
  }

  getAllUserCredentials(){
    this.obj.getNetBankingUserCredentials().subscribe(data=>{
      this.allNetBankingUsers = data;
      console.log(this.allNetBankingUsers);
    });
  }
  checkAdmin(){
    this.obj3.isAdmin=true;
    // routerLink="/AdminDashboard"
    this.router.navigate(["/AdminDashboard"]);
  }

 
}



