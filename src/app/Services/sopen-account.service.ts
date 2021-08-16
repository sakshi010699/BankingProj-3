import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
//Importing both pipeable operator.
import {catchError} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserOpenAccount } from 'Models/user-open-account';

@Injectable({
  providedIn: 'root'
})
export class SOpenAccountService {

  constructor(private http:HttpClient) { }
  req:string="https://localhost:44333/api/";
  createUser(a:UserOpenAccount):Observable<UserOpenAccount>
  {
    console.log(a);
    return this.http.post<UserOpenAccount>(this.req + "UserOpenAccounts1",a,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }
  getOccupation(){
    return this.http.get(this.req+"OccupationTypes");

  }
}
