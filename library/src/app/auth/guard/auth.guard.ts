import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private authService:AuthService,private router:Router)
  {
    
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // guard to check if the user is logged in or not. if logged in then cannot give permission to go to login and register page
    const token = this.authService.checkToken()
    if(token)
    {
      this.router.navigate(['/'])
      return false
    }
    else{
      return true
    }
  }
  
}
