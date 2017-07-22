import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {

  constructor(http: Http) {
    this.http = http;
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Token ' + localStorage.getItem('accessToken'));
  }

  getEmployees() {
    const myHeaders = new Headers();
    this.createAuthorizationHeader(myHeaders);
    return this.http.get('http://staging.tangent.tngnt.co/api/employee/', {headers: myHeaders})
      .map((response: Response) => {
        const employees = response.json();
        return employees;
      });
  }

 }
