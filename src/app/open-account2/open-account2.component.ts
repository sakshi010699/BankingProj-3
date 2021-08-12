import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as M from 'minimatch';
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
  MiddleName:new FormControl(""),
  LastName:new FormControl("",[Validators.required]),
  FathersName:new FormControl("",[Validators.required]),
  MobileNumber:new FormControl("",[Validators.required, Validators.minLength(10), 
    Validators.maxLength(10),Validators.pattern("[0-9]*")]),
  EmailID:new FormControl("",[Validators.email]),
  DateOfBirth:new FormControl("",[Validators.required]),
  ResidentialAddrLine1:new FormControl("",[Validators.required]),
  ResidentialAddrLine2:new FormControl("",[Validators.required]),
  ResidentialLandmark:new FormControl(""),
  ResidentialPincode:new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(6), Validators.maxLength(6)]),
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
  DebitCard:new FormControl(false,[Validators.required]),
  NetBanking:new FormControl(false,[Validators.required]),
  ApprovalStatus:new FormControl(false,[Validators.required]),
  Agree:new FormControl(null,[Validators.required])


  

  })
  msg:string="";
  agree:boolean=false;
  agreeWarning:string="";
  todayDate=new Date();
  y:string=this.todayDate.getFullYear().toString();
  m:number=this.todayDate.getMonth()+1;
  mm:string=this.m.toString();
  d:string=this.todayDate.getDate().toString();
  date:string="";
  //date:string= this.y + "-" + this.m + "-" + this.d;
  
  addCheck:boolean=false;
  isDisabled:string="";
  temp=new FormControl("");

  constructor(private obj:UserOpenAccount2Service) { }

  ngOnInit(): void {
    if(this.d.length==1)
    this.d="0"+this.d;

    if(this.mm.length==1)
    this.mm="0"+this.mm;
    this.date=this.y+"-"+this.mm+"-"+this.d;
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
      this.UserBasicInfo.controls.PermanentAddrLine1.setValue(this.UserBasicInfo.controls.ResidentialAddrLine1.value);
      this.UserBasicInfo.controls.PermanentAddrLine2.setValue(this.UserBasicInfo.controls.ResidentialAddrLine2.value);
      this.UserBasicInfo.controls.PermanentLandmark.setValue(this.UserBasicInfo.controls.ResidentialLandmark.value);      
      this.UserBasicInfo.controls.PermanentPincode.setValue(this.UserBasicInfo.controls.ResidentialPincode.value);            
      this.UserBasicInfo.controls.PermanentCity.setValue(this.UserBasicInfo.controls.ResidentialCity.value); 
      this.UserBasicInfo.controls.PermanentState.setValue(this.UserBasicInfo.controls.ResidentialState.value);           
      this.addCheck=true;

      console.log(this.date);
      this.isDisabled="disabled";
    }
    else
    {
      this.UserBasicInfo.controls.PermanentAddrLine1.setValue("");
      this.UserBasicInfo.controls.PermanentAddrLine2.setValue("");
      this.UserBasicInfo.controls.PermanentLandmark.setValue("");      
      this.UserBasicInfo.controls.PermanentPincode.setValue("");            
      this.UserBasicInfo.controls.PermanentCity.setValue(""); 
      this.UserBasicInfo.controls.PermanentState.setValue("");           
      this.addCheck=false;
      this.isDisabled="";
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
