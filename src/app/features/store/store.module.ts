import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechListComponent } from './components/tech-list/tech-list.component';
import { StoreRoutingModule } from './store-routing.module';



@NgModule({
  declarations: [
    TechListComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
  ]
})
export class StoreModule { }
