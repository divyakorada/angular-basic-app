import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HelloGuard implements CanActivate {

  constructor(private AS: AuthService) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |UrlTree | Promise<boolean | UrlTree>  {
  console.log('route::::', route);
  console.log('state::::', state);
  if(this.AS.isUserLoggedIn) {
    return true;
  } else {
   return false;
  }
}
  
}
