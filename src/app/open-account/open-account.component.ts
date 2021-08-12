import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserOpenAccount } from 'Models/user-open-account';
import { SOpenAccountService } from '../Services/sopen-account.service';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent{
  msg:string="";
  a:UserOpenAccount[]=[];
  b:UserOpenAccount={
    aadharCardNumber:"",
    title:"",
    firstName:"",
    middleName:"",
    lastName:"",
    fathersName:"",
    mobileNumber:"",
    emailId:"",
    dateOfBirth:new Date(),
    residentialAddrLine1:"",
    residentialAddrLine2:"",
    residentialLandmark:"",
    residentialPincode:"",
    permEqualRes:false,
    occupationType:"",
    sourceOfIncome:"",
    grossAnnualIncome:"",
    debitCard:false,
    netBanking:false,
    approvalStatus:false,



    
  };

  constructor(private obj:SOpenAccountService) { }
  ngOnInit(): void {
  }

  agree:boolean=false;
  agreeWarning:string="";
  todayDate=new Date();
  y:string=this.todayDate.getFullYear().toString();
  m:string=this.todayDate.getMonth().toString();
  d:string=this.todayDate.getDate().toString();
  date:string= this.y + "-" + this.m + "-" + this.d;
 



  userBasicInfo=new FormGroup(
    {
      Title: new FormControl("",[Validators.required]),
      FirstName: new FormControl("",[Validators.required]),
      MiddleName: new FormControl(""),
      LastName: new FormControl("",[Validators.required]),
      FathersName: new FormControl("",[Validators.required]),
      MobileNumber: new FormControl("",[Validators.required, Validators.minLength(10), 
        Validators.maxLength(10),Validators.pattern("[0-9]*")]),
      EmailID: new FormControl("",[Validators.email]),
      AadharCardNumber: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"),Validators.maxLength(12),
        Validators.minLength(12)]),
      DateOfBirth: new FormControl(Date,[Validators.required]),
      ResidentialAddrLine1: new FormControl("",[Validators.required]),
      ResidentialAddrLine2: new FormControl("",[Validators.required]),
      ResidentialLandmark: new FormControl(""),
      ResidentialState: new FormControl("",[Validators.required, Validators.pattern("[a-z A-Z]*")]),
      rCity: new FormControl("",[Validators.required, Validators.pattern("[a-z A-Z]*")]),
      rPinCode: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(6), Validators.maxLength(6)]),
      PermEquaRes: new FormControl(false),
      pLine1: new FormControl("",[Validators.required]),
      pLine2: new FormControl("",[Validators.required]),
      pLandmark: new FormControl(""),
      pState: new FormControl("",[Validators.required, Validators.pattern("[a-z A-Z]*")]),
      pCity: new FormControl("",[Validators.required, Validators.pattern("[a-z A-Z]*")]),
      pPinCode: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(6), Validators.maxLength(6)]),
      OccupationType: new FormControl("",[Validators.required]),
      SourceOfIncome: new FormControl("",[Validators.required]),
      GrossAnnualIncome: new FormControl("",[Validators.required]),
      DebitCard: new FormControl(""),
      NetBanking: new FormControl(""),
      ApprovalStatus: new FormControl(0)
    }

  )


  addCheck:boolean=false;
  temp=new FormControl("");

  post_api(data:any):void
  {
    console.log(data);
    this.obj.createUser(data).subscribe(data=>{
    this.msg="Successfully created "+ data.firstName;
    //Logging the response received from web api.
    console.log(data);
    })
  }

  // sameAddress(){
  //   if(this.addCheck==false)
  //   {
  //     this.userBasicInfo.controls.pLine1.setValue(this.userBasicInfo.controls.ResidentialAddrLine1.value);      
  //     this.userBasicInfo.controls.pLine2.setValue(this.userBasicInfo.controls.ResidentialAddrLine2.value);      
  //     this.userBasicInfo.controls.pLandmark.setValue(this.userBasicInfo.controls.ResidentialLandmark.value);
  //     this.userBasicInfo.controls.pPinCode.setValue(this.userBasicInfo.controls.ResidentialPincode.value);            
  //     this.userBasicInfo.controls.pCity.setValue(this.userBasicInfo.controls.rCity.value); 
  //     this.userBasicInfo.controls.pState.setValue(this.userBasicInfo.controls.rState.value);           
  //     this.addCheck=true;
  //   }
  //   else
  //   {
  //     this.userBasicInfo.controls.pLine1.setValue("");      
  //     this.userBasicInfo.controls.pLine2.setValue("");      
  //     this.userBasicInfo.controls.pLandmark.setValue("");
  //     this.userBasicInfo.controls.pPinCode.setValue("");            
  //     this.userBasicInfo.controls.pCity.setValue(""); 
  //     this.userBasicInfo.controls.pState.setValue("");           
  //     this.addCheck=false;
  //   }

  //   console.log(this.date);
    
  // }

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

  // onSubmit()
  // {
  //   if(this.agree==false)
  //   this.agreeWarning="Please agree to the terms and conditions!";
  //   else
  //   console.log(this.userBasicInfo.value);
  // }

    
}
