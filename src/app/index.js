import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from './routes';

import {MainComponent} from './main';
import {HeaderComponent} from './header/header';
import {FooterComponent} from './footer/footer';
import {HomeComponent} from './home/home';

@NgModule({
  imports: [
    BrowserModule,
    RoutingModule
  ],
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent
  ],
  bootstrap: [MainComponent]
})
export class AppModule {}
