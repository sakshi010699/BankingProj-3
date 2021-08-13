import { Injectable } from '@angular/core';
import { UserOpenAccount } from 'Models/user-open-account';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NetBankingUserDetails } from 'Models/net-banking-user-details';
import { AccountDetails } from 'Models/account-details';

@Injectable({
  providedIn: 'root'
})
export class SadminApproveService {

  constructor(private http : HttpClient) { }

  req:string="https://localhost:44333/api/";

  createNetBanking(details:NetBankingUserDetails):Observable<NetBankingUserDetails>
  {
    console.log(details);
    return this.http.post<NetBankingUserDetails>(this.req+"NetBankingUserDetails",details,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  createAccount(aDetails:AccountDetails):Observable<AccountDetails>
  {
    return this.http.post<AccountDetails>(this.req+"AccountDetails",aDetails,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  
  getAllUsers():Observable<UserOpenAccount[]>
  {
    return this.http.get<UserOpenAccount[]>(this.req + "UserOpenAccounts");
  }

  getUserAccountById(id : string):Observable<any>
  {
    return this.http.get(this.req + "UserOpenAccounts/" + id );
  }

  // getAllAccounts():Observable<AccountDetails>
  // {
  //   return this.http.get<AccountDetails[]>(this.req+"")
  // }

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
