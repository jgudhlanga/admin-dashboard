import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(http: Http, headers: Headers, response: Response, observable: Observable) {
    this.http = http;
    this.observable = observable;
    this.headers = headers;
    this.response = response;
  }

  login(data: any) {
    return this.http.post('http://staging.tangent.tngnt.co/api-token-auth/', data)
      .map((response: Response) => function () {
        const userToken = response.json();
        if (userToken && userToken.token) {
          localStorage.setItem('accessToken', userToken.token);
        }
        return userToken;
      });
  }

  logout() {
    localStorage.clear();
  }

  currentUser = (localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')) : null;

 }
