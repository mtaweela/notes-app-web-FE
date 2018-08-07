import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SignupComponent } from './views/user/signup/signup.component';
import { LoginComponent } from './views/user/login/login.component';
import { ViewprofileComponent } from './views/user/viewprofile/viewprofile.component';
import { EditprofileComponent } from './views/user/editprofile/editprofile.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ViewprofileComponent
  },
  {
    path: 'profile/edit',
    component: EditprofileComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
