import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate {
  role:any;
  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.role = JSON.parse(localStorage.getItem('user'));
      console.log(this.role.roles[0]);

      if(this.role.roles[0].name === 'Administrado'){
        return true;
      }

      this.router.navigate(['dashboard']);
      return false;
  }

}
