import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-netbanking-register',
  templateUrl: './netbanking-register.component.html',
  styleUrls: ['./netbanking-register.component.css']
})
export class NetbankingRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  netBankingReg = new FormGroup({
    accountNo : new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(4)]),
    setPass : new FormControl("", [Validators.required]),
    confirmPass : new FormControl("", [Validators.required,passwordcompare]),
    setTranPass : new FormControl("", [Validators.required]),
    confirmTranPass : new FormControl("", [Validators.required,tranPasswordcompare]),
    enterOtp : new FormControl("", [Validators.required])
  })
  onSubmit() {
    console.log(this.netBankingReg.value);
  }


}
export function passwordcompare(control:AbstractControl):any{
  let controlvalue:string=control.value;
  let comparevalue:string=control.root.get("setPass")?.value;
  if(!(controlvalue==comparevalue))
 {
  return {'errors':true}
 }
}

export function tranPasswordcompare(control:AbstractControl):any{
  let controlvalue:string=control.value;
  let comparevalue:string=control.root.get("setTranPass")?.value;
  if(!(controlvalue==comparevalue))
 {
  return {'errors':true}
 }
}