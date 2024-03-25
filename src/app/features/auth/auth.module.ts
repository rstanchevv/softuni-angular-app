import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing-module';
import { RegisterPage } from './pages/register/register.page';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
  RegisterPage,
  LoginPage,
  ProfilePage,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    AuthRoutingModule,
    FormsModule,
  ],
  exports: [],
})
export class AuthModule { }
