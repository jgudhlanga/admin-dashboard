import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: require('./main.html')
})
export class MainComponent {
  constructor() {
    this.hello = 'Main Component';
  }
}
