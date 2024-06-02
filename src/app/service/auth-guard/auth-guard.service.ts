import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const expectedRoles = route.data['roles'];
    const useRoles = this.authService.getRoles();
    if (!this.authService.isLoggedIn() || !this.hasRequiredRole(expectedRoles, useRoles)) {
      this.router.navigate(['login']);
      return false;

    }
    return true;
  }

  private hasRequiredRole(expectedRoles: string, useRoles: string): boolean {
    if (!expectedRoles || expectedRoles.length === 0) {
      return true;
    }
    for (const role of useRoles) {
      if (expectedRoles.includes(role)) {
        return true;
      }
    }
    return false;
  }
}
