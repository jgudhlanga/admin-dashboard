import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  template: require('./auth.html')
})

export class AuthComponent implements OnInit {

  constructor(router: Router, authService: AuthService) {
    this.router = router;
    this.authService = authService;
  }

  error: any;
  userToken: any;
  formLogin: any;
  loading: boolean;

  ngOnInit() {
    this.formLogin = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(5)
      ])),
      password: new FormControl('', Validators.required)
    });
  }

  login(data: any) {
    this.loading = true;
    this.authService.login(data)
    .subscribe(result => {
      this.userToken = result;
    },
    error => {
      this.error = error;
    },
    () => {
      this.loading = false;
      this.router.navigate(['/home']);
    });
  }
}
