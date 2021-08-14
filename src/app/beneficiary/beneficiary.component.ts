import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { BeneficiaryDetails } from 'Models/beneficiary-details';
import { AddBeneficiaryDetailsService } from '../Services/add-beneficiary-details.service';


@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {
  bDetails:BeneficiaryDetails[]=[];
  bDetail:BeneficiaryDetails={
    beneficiaryAccNo:0,
    userAccountNo:0,
    beneficiaryName:"",
    nickName:""
    
  };
  msg:string="";


  constructor(private obj:AddBeneficiaryDetailsService) { }

  ngOnInit(): void {
  }

  beneficiary = new FormGroup({
    BeneficiaryName : new FormControl("", [Validators.required]),
    BeneficiaryAccNo : new FormControl("",[Validators.required, Validators.maxLength(10),Validators.minLength(4)]),
     reEnterBeneficiaryAccNo : new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(4),accNumbercompare]),
     saveBeneficiary : new FormControl(),
    NickName : new FormControl(),
    UserAccountNo:new FormControl("",[Validators.required, Validators.maxLength(10),Validators.minLength(4)])
  })
 

  saveDetails(){
    console.log(this.beneficiary.value);
  }
  post_api(data:any):void
  {
    this.obj.CreateBeneficiary(data).subscribe(data=>{
    this.msg="Successfully created "+data.nickName;
    //Logging the response received from web api.
    console.log(data);
    })
  }

}
export function accNumbercompare(control:AbstractControl):any{
  let controlvalue:string=control.value;
  let comparevalue:string=control.root.get("BeneficiaryAccNo")?.value;
  if(!(controlvalue==comparevalue))
 {
  return {'errors':true}
 }
}