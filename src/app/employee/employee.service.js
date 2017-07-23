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
        if (employees) {
          localStorage.setItem('allEmployees', JSON.stringify(employees));
        }
        return employees;
      });
  }

  getEmployeesCount() {
    let totalCount = 0;
    if (localStorage.allEmployees) {
      totalCount = JSON.parse(localStorage.allEmployees).length;
    }
    return totalCount;
  }

  getFemalesCount() {
    let femaleCount = 0;
    if (this.getEmployeesCount() > 0) {
      const employees = JSON.parse(localStorage.allEmployees);
      for (let i = 0; i < employees.length; i++) {
        if (employees[i].gender === 'F') {
          femaleCount++;
        }
      }
    }
    return femaleCount;
  }

  getMalesCount() {
    let maleCount = 0;
    if (this.getEmployeesCount() > 0) {
      const employees = JSON.parse(localStorage.allEmployees);
      for (let i = 0; i < employees.length; i++) {
        if (employees[i].gender === 'M') {
          maleCount++;
        }
      }
    }
    return maleCount;
  }

  getPositions() {
    const positions = {};
    if (this.getEmployeesCount() > 0) {
      const employees = JSON.parse(localStorage.allEmployees);
      for (let i = 0; i < employees.length; i++) {
        if (employees[i].position.name) {
          if (Object.prototype.hasOwnProperty.call(positions, employees[i].position.name)) {
            positions[employees[i].position.name] += 1;
          } else {
            Object.assign(positions, {[employees[i].position.name]: 1});
          }
        }
      }
    }
    return positions;
  }

 }
