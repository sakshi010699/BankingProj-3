import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nefttransaction',
  templateUrl: './nefttransaction.component.html',
  styleUrls: ['./nefttransaction.component.css']
})
export class NEFTTransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  NEFTForm=new FormGroup({
    From_Account:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
    To_Account : new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
    Amount : new FormControl("",[Validators.required]),
    Transaction_Date : new FormControl("",[Validators.required]),
    Remark : new FormControl("",[Validators.required])


  })

  onSubmit(){ 

    console.log(this.NEFTForm.value);
  }
}
