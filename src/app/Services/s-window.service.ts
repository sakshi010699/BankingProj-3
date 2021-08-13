import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SWindowService {

  get windowRef(){
    return window;
  }
}
