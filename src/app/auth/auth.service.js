import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(http: Http) {
    this.http = http;
  }

  login(data: any) {
    return this.http.post('http://staging.tangent.tngnt.co/api-token-auth/', data)
      .map((response => response.json()));
  }

  logout() {
    localStorage.clear();
  }

  currentUser = (localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')) : null;

  isLoggedIn() {
    if (localStorage.getItem('accessToken')) {
      return true;
    }
  }
 }
