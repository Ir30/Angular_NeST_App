import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { ViewCourseComponent } from './view-course/view-course.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { NavEmpComponent } from './nav-emp/nav-emp.component'

const myRouter:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"admin_login",
    component:AdminLoginComponent
  },
  {
    path:"view_course",
    component:ViewCourseComponent
  },
  {
    path:"view_friends",
    component:ViewFriendsComponent
  },
  {
    path:"add_emp",
    component:AddEmpComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AdminLoginComponent,
    ViewCourseComponent,
    NavAdminComponent,
    ViewFriendsComponent,
    AddEmpComponent,
    NavEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
