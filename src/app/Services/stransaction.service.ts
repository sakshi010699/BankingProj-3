import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
//Importing both pipeable operator.
import {catchError} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AccountDetails } from 'Models/account-details';
import { UserTransaction } from 'Models/user-transaction';
import { BeneficiaryDetails } from 'Models/beneficiary-details';
import { UserOpenAccount } from 'Models/user-open-account';

@Injectable({
  providedIn: 'root'
})
export class STransactionService {

  constructor(private http:HttpClient) { }
  req:string="https://localhost:44333/api";
  getAllUsers():Observable<BeneficiaryDetails[]>
  {
    return this.http.get<BeneficiaryDetails[]>(this.req+"/BeneficiaryDetails");
    
  }
  getAllTransactionDetails():Observable<UserTransaction[]>
  {
    return this.http.get<UserTransaction[]>(this.req+"/UserTransactions");
  }
  getAllAccountDetails():Observable<AccountDetails[]>
  {
    return this.http.get<AccountDetails[]>(this.req+"/AccountDetails");
  }
  getAllUserOpenAccountDetails():Observable<UserOpenAccount[]>
  {
    return this.http.get<UserOpenAccount[]>(this.req+"/UserOpenAccounts1");
  }
   updateAccount(id:number,a:AccountDetails):Observable<any>
  {
    
    return this.http.put<AccountDetails>(this.req+"/AccountDetails/"+id,a,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
    
    


  }
  createTransaction(user:UserTransaction):Observable<UserTransaction>

  {
  
    return this.http.post<UserTransaction>(this.req+"/UserTransactions",user,{
  
      headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
    })
  
  });
  
  }
  
  getAccountDetailsById(id:number): Observable<any> {

   // console.log(`${this.req}/${"AccountDetails"}/${id}`);
    return this.http.get(`${this.req}/${"AccountDetails"}/${id}`);
  }

  getTransactionDetailsByAccountNo(id:number): Observable<any> {

    // console.log(`${this.req}/${"UserTransactions"}/${id}`);
     return this.http.get(`${this.req}/${"UserTransactions"}/${id}`);
   }
  
  getBeneficiaryDetailsByID(id:number):Observable<any>{
    return this.http.get(this.req+"/BeneficiaryDetails/"+id);
  }

}


