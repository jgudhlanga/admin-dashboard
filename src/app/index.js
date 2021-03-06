import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RoutingModule} from './routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MainComponent} from './main';
import {UserProfileComponent} from './user-profile/user-profile';
import {HeaderComponent} from './header/header';
import {FooterComponent} from './footer/footer';
import {HomeComponent} from './home/home';
import {AuthService} from './auth/auth.service';
import {AuthComponent} from './auth/auth';
import {AuthGuard} from './auth/auth.guard';
import {EmployeeService} from './employee/employee.service';
import {EmployeeComponent} from './employee/employee';
import {DashboardComponent, KeysPipe} from './dashboard/dashboard';
import {NotFoundComponent} from './not-found/not-found';

@NgModule({
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    AuthComponent,
    EmployeeComponent,
    DashboardComponent,
    KeysPipe,
    NotFoundComponent,
    UserProfileComponent
  ],
  providers: [AuthService, AuthGuard, EmployeeService],
  bootstrap: [MainComponent]
})
export class AppModule {}
