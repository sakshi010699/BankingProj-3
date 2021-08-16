import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  global_account_number:number=0;

  constructor() { }
}
