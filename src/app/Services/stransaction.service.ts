import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
//Importing both pipeable operator.
import {catchError} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AccountDetails } from 'Models/account-details';
import { UserTransaction } from 'Models/user-transaction';
import { BeneficiaryDetails } from 'Models/beneficiary-details';

@Injectable({
  providedIn: 'root'
})
export class STransactionService {

  constructor(private http:HttpClient) { }
<<<<<<< HEAD
  req:string="https://localhost:44390/api";
=======
  req:string="https://localhost:44346/api";
>>>>>>> 6063e75dd3504071f49dfc8e52bf19e10ddb63c0
  getAllUsers():Observable<BeneficiaryDetails[]>
  {
    return this.http.get<BeneficiaryDetails[]>(this.req+"/BeneficiaryDetails");
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
  

}


