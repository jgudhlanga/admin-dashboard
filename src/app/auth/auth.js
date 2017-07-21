import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  template: require('./auth.html')
})

export class AuthComponent implements OnInit {

  constructor() {
    this.router = Router;
    this.authService = AuthService;
  }

  error: any;
  formLogin: any;
  loading: boolean;

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(5)
      ])),
      password: new FormControl('', Validators.required)
    });
  }

  login(data: any) {
    this.loading = true;
    this.authService.login(data);
  }
}
