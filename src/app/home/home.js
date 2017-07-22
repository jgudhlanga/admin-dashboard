import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {EmployeeService} from '../employee/employee.service';

@Component({
  selector: 'app-home',
  template: require('./home.html')
})

export class HomeComponent {

  constructor(authService: AuthService, router: Router, employeeService: EmployeeService) {
    this.router = router;
    this.authService = authService;
    this.employeeService = employeeService;
  }

  user: any;
  employees: any;
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

  getEmployees() {
    if (this.authService.isLoggedIn) {
      this.employeeService.getEmployees()
        .subscribe(
          employees => {
            this.employees = employees;
          },
          error => {
            this.error = error;
          });
    }
  }

  ngOnInit() {
    this.getUser();
    this.getEmployees();
  }

}
