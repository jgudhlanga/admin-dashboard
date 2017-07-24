import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home';
import {AuthComponent} from './auth/auth';
import {AuthGuard} from './auth/auth.guard';
import {NotFoundComponent} from './not-found/not-found';
import {UserProfileComponent} from './user-profile/user-profile';

const routes: Routes = [
 {path: '', redirectTo: '/home', pathMatch: 'full'},
 {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
 {path: 'auth', component: AuthComponent},
 {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},
 {path: '**', component: NotFoundComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
