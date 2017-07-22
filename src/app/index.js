import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RoutingModule} from './routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MainComponent} from './main';
import {HeaderComponent} from './header/header';
import {FooterComponent} from './footer/footer';
import {HomeComponent} from './home/home';
import {AuthService} from './auth/auth.service';
import {AuthComponent} from './auth/auth';
import {AuthGuard} from './auth/auth.guard';

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
    AuthComponent
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [MainComponent]
})
export class AppModule {}
