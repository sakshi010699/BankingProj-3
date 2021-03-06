import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
//Importing both pipeable operator.
import {catchError} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NetBankingUserDetails } from 'Models/net-banking-user-details';

@Injectable({
  providedIn: 'root'
})
export class SSetNewTranPassswordService {

  constructor(private http:HttpClient) { }
  req:string="https://localhost:44333/api/";
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
