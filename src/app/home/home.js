import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {EmployeeService} from '../employee/employee.service';

@Component({
  selector: 'app-home',
  template: require('./home.html')
})

export class HomeComponent {

  constructor(authService: AuthService, router: Router, employeeService: EmployeeService, activatedRoute: ActivatedRoute) {
    this.router = router;
    this.authService = authService;
    this.employeeService = employeeService;
    this.activatedRoute = activatedRoute;
  }

  user: any;
  employees: any;
  error: any;
  selectedEmployee: any;
  loadingData: boolean;
  urlParams: any;

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

  getEmployees(params) {
    if (this.authService.isLoggedIn) {
      this.loadingData = true;
      this.employeeService.getEmployees(params)
        .subscribe(
          employees => {
            this.employees = employees;
          },
          error => {
            this.error = error;
          },
          () => {
            this.loadingData = false;
          });
    }
  }

  onSelectEmployee(emp) {
    this.selectedEmployee = emp;
  }

  ngOnInit() {
    this.getUser();
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        this.urlParams = params;
      });
    this.getEmployees();
  }

}
