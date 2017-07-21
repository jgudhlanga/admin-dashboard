import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes = [
  {
    path: '',
    component: MainComponent
  }
];

export const routing = RouterModule.forRoot(routes);
