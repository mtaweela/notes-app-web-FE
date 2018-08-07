import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { UserComponent } from './views/user/user.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeaderComponent } from './views/addons/header/header.component';
import { SidebarComponent } from './views/addons/sidebar/sidebar.component';
import { LoginComponent } from './views/user/login/login.component';
import { SignupComponent } from './views/user/signup/signup.component';
import { ViewprofileComponent } from './views/user/viewprofile/viewprofile.component';
import { EditprofileComponent } from './views/user/editprofile/editprofile.component';
import { TodoService } from './services/todo.service/todo.service';
import { EdittodoComponent } from './views/dashboard/edittodo/edittodo.component';
import { AddtodoComponent } from './views/dashboard/addtodo/addtodo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    SignupComponent,
    ViewprofileComponent,
    EditprofileComponent,
    EdittodoComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
