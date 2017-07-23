import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-employee',
  template: require('./employee.html')
})

export class EmployeeComponent {
  @Input() employee: any;
}
