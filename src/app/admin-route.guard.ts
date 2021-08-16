import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminRouteGuard implements CanActivate {

  isAdmin:boolean=false;
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.isAdmin==true)
        return true;
      else
        return false;
  }
  
}
