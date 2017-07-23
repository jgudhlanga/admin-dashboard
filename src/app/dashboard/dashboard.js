import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {EmployeeService} from '../employee/employee.service';

@Component({
  selector: 'app-dashboard',
  template: require('./dashboard.html')
})
export class DashboardComponent implements OnInit {
  constructor(router:Router, authService: AuthService, employeeService: EmployeeService) {
    this.router = router;
    this.authService = authService;
    this.employeeService = employeeService;
    employeeService.getPositionsCount();
  }
}

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value) : any {
    if (!value) {
      return null;
    }
    return Object.keys(value);
  }
}
