import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
//Importing both pipeable operator.
import {catchError} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserOpenAccount } from 'Models/user-open-account';

@Injectable({
  providedIn: 'root'
})
export class UserOpenAccount2Service {

  constructor(private http:HttpClient) { }
<<<<<<< HEAD
  req:string="https://localhost:44390/api/";
=======
  req:string="https://localhost:44346/api/UserOpenAccounts";
>>>>>>> 6063e75dd3504071f49dfc8e52bf19e10ddb63c0

  
  CreateBeneficiary(bDetails:UserOpenAccount):Observable<UserOpenAccount>
  {
    console.log(bDetails);
    return this.http.post<UserOpenAccount>(this.req + "UserOpenAccounts",bDetails,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
}
}
