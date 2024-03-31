import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { TechItemComponent } from './components/tech-list/tech-item.component';
import { StorePage } from './pages/store/store.component';
import { RouterModule } from '@angular/router';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TechItemComponent,
    StorePage,
    CreateItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreRoutingModule,
    MatCardModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class StoreModule { }
