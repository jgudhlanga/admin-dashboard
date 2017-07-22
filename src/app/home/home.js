import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-home',
  template: require('./home.html')
})

export class HomeComponent {

  constructor(authService: AuthService, router: Router) {
    this.router = router;
    this.authService = authService;
  }

  user: any;
  error: any;

  getUser() {
    if (this.authService.isLoggedIn) {
      this.authService.getUser()
        .subscribe(
          user => {
            this.user = user;
          },
          error => {
            this.error = error;
          });
    }
  }

  ngOnInit() {
    this.getUser();
  }

}
