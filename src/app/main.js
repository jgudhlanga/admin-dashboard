import {Component} from '@angular/core';

@Component({
  selector: 'main-app',
  template: require('./main.html')
})
export class MainComponent {
  constructor() {
    this.hello = 'Main Component';
  }
}
