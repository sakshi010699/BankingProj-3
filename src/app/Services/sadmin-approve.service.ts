import { Injectable } from '@angular/core';
import { UserOpenAccount } from 'Models/user-open-account';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SadminApproveService {

  constructor(private http : HttpClient) { }

  req:string="https://localhost:44346/api/";

  getAllUsers():Observable<UserOpenAccount[]>
  {
    return this.http.get<UserOpenAccount[]>(this.req + "UserOpenAccounts");
  }

  getUserAccountById(id : string):Observable<any>
  {
    return this.http.get(this.req + "UserOpenAccounts/" + id );
  }

  updateAccount(id:string,player:UserOpenAccount):Observable<any>
  {
    return this.http.put<any>(this.req + "UserOpenAccounts/" +id,player,{
    headers:new HttpHeaders({
    'Content-Type':'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Method':'*'
  })
  });
  }
}
