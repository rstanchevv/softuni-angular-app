import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TechModule } from '../tech/tech.module';
import { InfoComponent } from './info/info.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingProfile } from './home-routing-module';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    TechModule,
    SharedModule,
    HomeRoutingProfile,
    UserModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
