import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(http: Http) {
    this.http = http;
  }

  user: any;

  login(data: any) {
    return this.http.post('http://staging.tangent.tngnt.co/api-token-auth/', data)
      .map((response: Response) => {
        const userToken = response.json();
        if (userToken && userToken.token) {
          localStorage.setItem('accessToken', userToken.token);
        }
        return userToken;
      });
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Token ' + localStorage.getItem('accessToken'));
  }

  getUser() {
    const myHeaders = new Headers();
    this.createAuthorizationHeader(myHeaders);
    return this.http.get('http://staging.tangent.tngnt.co/api/user/me/', {headers: myHeaders})
      .map((response: Response) => {
        const user = response.json();
        if (user && user.id) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }

  getProfile() {
    const myHeaders = new Headers();
    this.createAuthorizationHeader(myHeaders);
    return this.http.get('http://staging.tangent.tngnt.co/api/employee/me/', {headers: myHeaders})
      .map((response: Response) => {
        const profile = response.json();
        if (profile && profile.id) {
          localStorage.setItem('currentUserProfile', JSON.stringify(profile));
        }
        return profile;
      });
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    if (localStorage.getItem('accessToken')) {
      return true;
    }
  }

  currentUser = (localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')) : null;

 }
