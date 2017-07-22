import {Component} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  template: require('./header.html')
})
export class HeaderComponent {

  constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
