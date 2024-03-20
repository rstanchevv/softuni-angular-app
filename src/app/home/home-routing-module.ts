import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../user/login/login.component';
import { AboutComponent } from '../about/about.component';
import { RegisterComponent } from '../user/register/register.component';


const routes: Routes = [{
    path: 'about', component: AboutComponent
}, {path: 'login', component: LoginComponent}
, {path: 'register', component: RegisterComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingProfile {}
