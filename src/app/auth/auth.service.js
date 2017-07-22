import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  API_URL = 'http://chms-server/api/v1/';

  constructor() {
    this.http = Http;
    this.observable = Observable;
    this.headers = Headers;
    this.response = Response;
  }

  login(data: any) {
    console.log(data);
    return 'You are logged in';
  }

  logout() {
    localStorage.clear();
  }

  currentUser = (localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')) : null;

 }
