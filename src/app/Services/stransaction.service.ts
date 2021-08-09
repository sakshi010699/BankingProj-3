import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
//Importing both pipeable operator.
import {catchError} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AccountDetails } from 'Models/account-details';

@Injectable({
  providedIn: 'root'
})
export class STransactionService {

  constructor(private http:HttpClient) { }
  req:string="https://localhost:44327/api/AccountDetails";
   updateUser(id:number,a:any):Observable<any>
  {
    
    return this.http.put<any>(this.req+"/"+id,a,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }



}
