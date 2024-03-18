import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TechModule } from '../tech/tech.module';
import { InfoComponent } from './info/info.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    TechModule,
    SharedModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
