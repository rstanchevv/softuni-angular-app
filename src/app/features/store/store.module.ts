import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { TechItemComponent } from './components/tech-list/tech-item.component';
import { StorePage } from './pages/store/store.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TechItemComponent,
    StorePage
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreRoutingModule,
    MatCardModule,
    SharedModule
  ]
})
export class StoreModule { }
