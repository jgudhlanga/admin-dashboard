import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {EmployeeService} from '../employee/employee.service';

@Component({
  selector: 'app-dashboard',
  template: require('./dashboard.html')
})
export class DashboardComponent {
  constructor(router:Router, authService: AuthService, employeeService: EmployeeService) {
    this.router = router;
    this.authService = authService;
    this.employeeService = employeeService;
  }
}
