import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilePage } from './pages/profile/profile.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';

const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
   {path: 'profile', component: ProfilePage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
