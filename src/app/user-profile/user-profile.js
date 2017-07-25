import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee/employee.service';

@Component({
  selector: 'user-profile',
  template: require('./user-profile.html')
})
export class UserProfileComponent implements OnInit {
  constructor(employeeService: EmployeeService) {
    this.employeeService = employeeService;
  }
  employee: any;
  loadingData: boolean;

  getEmployee() {
    this.loadingData = true;
    this.employeeService.getEmployee()
    .subscribe(
      employee => {
        this.employee = employee;
      },
      error => {
        this.error = error;
      },
      () => {
        this.loadingData = false;
      });
  }

  ngOnInit() {
    this.getEmployee();
  }
}
