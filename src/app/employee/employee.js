import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-employee',
  template: require('./employee.html')
})

export class EmployeeComponent {
  @Input() employee: any;

  getGender(shortHand) {
    if (shortHand === 'M') {
      return 'Male';
    } else if (shortHand === 'F') {
      return 'Female';
    }
  }

  getRace(shortHand) {
    if (shortHand === 'B') {
      return 'Black African';
    } else if (shortHand === 'C') {
      return 'Colored';
    } else if (shortHand === 'I') {
      return 'Indian or Asian';
    } else if (shortHand === 'W') {
      return 'White';
    } else if (shortHand === 'N') {
      return 'None Dominant';
    }
  }

  getIsActive(isActive: boolean) {
    if (isActive === true) {
      return 'Yes';
    } else if (isActive === false) {
      return 'No';
    }
  }

  getIsStaff(isStaff: boolean) {
    if (isStaff === true) {
      return 'Yes';
    } else if (isStaff === false) {
      return 'No';
    }
  }
}
