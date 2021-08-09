import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
//Importing both pipeable operator.
import {catchError} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BeneficiaryDetails } from 'Models/beneficiary-details';


@Injectable({
  providedIn: 'root'
})
export class AddBeneficiaryDetailsService {

  constructor(private http:HttpClient) { }
  req:string="https://localhost:44327/api/BeneficiaryDetails";


  CreateBeneficiary(bDetails:BeneficiaryDetails):Observable<BeneficiaryDetails>
  {
    
    return this.http.post<BeneficiaryDetails>(this.req,bDetails,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
    
  }

}
