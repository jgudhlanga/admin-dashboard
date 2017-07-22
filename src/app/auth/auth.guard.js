import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(router: Router, authService: AuthService) {
    this.router = router;
    this.authService = authService;
  }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/auth']);
    return false;
  }
}
