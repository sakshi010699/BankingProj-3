import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserOpenAccount } from 'Models/user-open-account';
import { UserOpenAccount2Service } from '../Services/user-open-account2.service';

@Component({
  selector: 'app-open-account2',
  templateUrl: './open-account2.component.html',
  styleUrls: ['./open-account2.component.css']
})
export class OpenAccount2Component implements OnInit {

  UserBasicInfo= new FormGroup({
  AadharCardNumber:new FormControl("",[Validators.required, Validators.pattern("[0-9]*"),Validators.maxLength(12),
  Validators.minLength(12)]),
  Title:new FormControl("",[Validators.required]),
  FirstName:new FormControl("",[Validators.required]),
  MiddleName:new FormControl("",[Validators.required]),
  LastName:new FormControl("",[Validators.required]),
  FathersName:new FormControl("",[Validators.required]),
  MobileNumber:new FormControl("",[Validators.required, Validators.minLength(10), 
    Validators.maxLength(10),Validators.pattern("[0-9]*")]),
  EmailID:new FormControl("",[Validators.required,Validators.email]),
  DateOfBirth:new FormControl("",[Validators.required]),
  ResidentialAddrLine1:new FormControl("",[Validators.required]),
  ResidentialAddrLine2:new FormControl("",[Validators.required]),
  ResidentialLandmark:new FormControl("",[Validators.required]),
  ResidentialPincode:new FormControl("",[Validators.required]),
  ResidentialState: new FormControl("",[Validators.required, Validators.pattern("[a-z A-Z]*")]),
      ResidentialCity: new FormControl("",[Validators.required, Validators.pattern("[a-z A-Z]*")]),
  PermEqualRes:new FormControl("",[Validators.required]),
  PermanentAddrLine1: new FormControl("",[Validators.required]),
      PermanentAddrLine2: new FormControl("",[Validators.required]),
      PermanentLandmark: new FormControl(""),
      PermanentState: new FormControl("",[Validators.required, Validators.pattern("[a-z A-Z]*")]),
      PermanentCity: new FormControl("",[Validators.required, Validators.pattern("[a-z A-Z]*")]),
      PermanentPincode: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(6), Validators.maxLength(6)]),
  OccupationType:new FormControl("",[Validators.required]),
  SourceOfIncome:new FormControl("",[Validators.required]),
  GrossAnnualIncome:new FormControl("",[Validators.required]),
  DebitCard:new FormControl("",[Validators.required]),
  NetBanking:new FormControl("",[Validators.required]),
  ApprovalStatus:new FormControl(false,[Validators.required]),



  

  })
  msg:string="";
  agree:boolean=false;
  agreeWarning:string="";
  todayDate=new Date();
  y:string=this.todayDate.getFullYear().toString();
  m:string=this.todayDate.getMonth().toString();
  d:string=this.todayDate.getDate().toString();
  date:string= this.y + "-" + this.m + "-" + this.d;
  addCheck:boolean=false;
  temp=new FormControl("");

  constructor(private obj:UserOpenAccount2Service) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.UserBasicInfo.value);
  }
  post_api(data:any):void
  {
    this.obj.CreateBeneficiary(data).subscribe(data=>{
    this.msg="Successfully created "+data.firstName;
    //Logging the response received from web api.
    console.log(data);
    })
  }
  sameAddress(){
    if(this.addCheck==false)
    {
      this.UserBasicInfo.controls.pLine1.setValue(this.UserBasicInfo.controls.ResidentialAddrLine1.value);      
      this.UserBasicInfo.controls.pLine2.setValue(this.UserBasicInfo.controls.ResidentialAddrLine2.value);      
      this.UserBasicInfo.controls.pLandmark.setValue(this.UserBasicInfo.controls.ResidentialLandmark.value);
      this.UserBasicInfo.controls.pPinCode.setValue(this.UserBasicInfo.controls.ResidentialPincode.value);            
      this.UserBasicInfo.controls.pCity.setValue(this.UserBasicInfo.controls.rCity.value); 
      this.UserBasicInfo.controls.pState.setValue(this.UserBasicInfo.controls.rState.value);           
      this.addCheck=true;
    }
    else
    {
      this.UserBasicInfo.controls.pLine1.setValue("");      
      this.UserBasicInfo.controls.pLine2.setValue("");      
      this.UserBasicInfo.controls.pLandmark.setValue("");
      this.UserBasicInfo.controls.pPinCode.setValue("");            
      this.UserBasicInfo.controls.pCity.setValue(""); 
      this.UserBasicInfo.controls.pState.setValue("");           
      this.addCheck=false;
    }

    console.log(this.date);
    
  }
  agreed()
  {    
    if(this.agree==false)
    {
      this.agree=true;
      this.agreeWarning="";
    }
    
    else
    {
      this.agree=false;
    }
    
  }
}
