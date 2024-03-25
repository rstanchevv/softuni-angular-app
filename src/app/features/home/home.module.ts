import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { TechListComponent } from './components/tech-list/tech-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoComponent } from './components/info/info.component';
import { HomePage } from './pages/home/home.page';
import { HomeRoutingModule } from './home-routing-module';
import { UnauthenticatedComponent } from './components/unauthenticated/unauthenticated.component';



@NgModule({
  declarations: [
    TechListComponent,
    AboutComponent,
    InfoComponent,
    HomePage,
    UnauthenticatedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule,
  ],
  exports:[]
})
export class HomeModule { }
