import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IsUserLoggedInService } from '../services/is-user-logged-in.service';
import { Router } from '@angular/router';

@Injectable()
export class UserLoginGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let isUserLogin = this.isuserloggedinservice.isUserLoggedIn();
      
      if(!isUserLogin) {
        this.router.navigate(['']);
      }
      return isUserLogin;
  }

  constructor(private isuserloggedinservice:IsUserLoggedInService, private router:Router) {

  }
}
