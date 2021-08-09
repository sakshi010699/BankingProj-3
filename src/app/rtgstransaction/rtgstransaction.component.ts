import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rtgstransaction',
  templateUrl: './rtgstransaction.component.html',
  styleUrls: ['./rtgstransaction.component.css']
})
export class RTGSTransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  RTGSForm = new FormGroup({
  From_Account: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
  To_Account : new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
  Amount : new FormControl(""),
  Transaction_Date : new FormControl(""),
  Maturity_Instructions : new FormControl(),
  Remark : new FormControl()

  })
  onSubmit(){
    console.log(this.RTGSForm.value);
  }
}
