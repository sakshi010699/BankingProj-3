import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NetBankingUserDetails } from 'Models/net-banking-user-details';
import { SNetbankingUserService } from '../Services/s-netbanking-user.service';

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
  constructor(private obj:SNetbankingUserService) { }


  ngOnInit(): void {

    this.getAllUserCredentials();

  }
  LoginForm= new FormGroup({
    UserId : new FormControl("",[Validators.required]),
    Password : new FormControl("",[Validators.required])
  })

  validateBool : boolean = false;
  apnarouter : string = "/Login";

  userValidate(data:any){
    console.log("Hello");
    console.log(data.value);

    for(let item of this.allNetBankingUsers){
      if(item.userId == data.UserId){
        this.validateBool = true;
        if(item.userPassword == data.Password){
          alert('Login Successful');
          
          return this.apnarouter="/UserDashboard";
        }
        else{
          return alert('Wrong Password');
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

}

