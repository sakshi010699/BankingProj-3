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
  req:string="https://localhost:44327/api/UserOpenAccounts1";

  
  CreateBeneficiary(bDetails:UserOpenAccount):Observable<UserOpenAccount>
  {
    console.log(bDetails);
    return this.http.post<UserOpenAccount>(this.req,bDetails,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
}
}
