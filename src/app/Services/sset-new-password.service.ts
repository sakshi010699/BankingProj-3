import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
//Importing both pipeable operator.
import {catchError} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NetBankingUserDetails } from 'Models/net-banking-user-details';

@Injectable({
  providedIn: 'root'
})
export class SSetNewPasswordService {

  constructor(private http:HttpClient) { }
<<<<<<< HEAD
  req:string="https://localhost:44390/api/";
=======
  req:string="https://localhost:44346/api/NetBankingUserDetails";
>>>>>>> 6063e75dd3504071f49dfc8e52bf19e10ddb63c0

  updateUser(id:number,u:NetBankingUserDetails):Observable<any>
  {
    
    return this.http.put<any>(this.req+"NetBankingUserDetails/"+id,u,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}
