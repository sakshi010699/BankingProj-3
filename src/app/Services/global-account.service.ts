import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalAccountService {

  GlobalAcc_Number : number = 0;
  GlobalUser_Name : string = "";
  GlobalAadharCard_Number : string = "";
  constructor() { }


}
