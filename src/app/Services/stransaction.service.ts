import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
//Importing both pipeable operator.
import {catchError} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AccountDetails } from 'Models/account-details';
import { UserTransaction } from 'Models/user-transaction';

@Injectable({
  providedIn: 'root'
})
export class STransactionService {

  constructor(private http:HttpClient) { }
  req:string="https://localhost:44346/api/";

   updateUser(id:number,a:any):Observable<any>
  {
    
    return this.http.put<any>(this.req+"AccountDetails",a,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  createTransaction(user:UserTransaction):Observable<UserTransaction>

{

  return this.http.post<UserTransaction>(this.req+"UserTransactions",user,{

    headers:new HttpHeaders({
    'Content-Type':'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Method':'*'
  })

});

}

getAccountDetailsById(Id: number): Observable<any> 
{  
  return this.http.get(this.req+"AccountDetails/" + Id);
} 

}


