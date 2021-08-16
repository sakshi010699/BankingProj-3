import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
//Importing both pipeable operator.
import {catchError} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserOpenAccount } from 'Models/user-open-account';
import { LocationPinCodeCity } from 'Models/location-pin-code-city';
import { LocationCityState } from 'Models/location-city-state';
//import { NetBankingUserDetails } from 'Models/net-banking-user-details';

@Injectable({
  providedIn: 'root'
})
export class UserOpenAccount2Service {

  constructor(private http:HttpClient) { }
  req:string="https://localhost:44327/api/";


  CreateUser(bDetails:UserOpenAccount):Observable<UserOpenAccount>
  {
    console.log(bDetails);
    return this.http.post<UserOpenAccount>(this.req + "UserOpenAccounts",bDetails,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
}

  getCityByID(pincode:string):Observable<LocationPinCodeCity>{
    return this.http.get<LocationPinCodeCity>(this.req + "LocationPinCodeCities/"+pincode);
  }

  getStateByID(id:string):Observable<LocationCityState>{
    return this.http.get<LocationCityState>(this.req+"LocationCityStates/"+id);
  }
}
