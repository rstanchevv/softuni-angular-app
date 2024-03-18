import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechItemComponent } from './tech-item/tech-item.component';
import { TechListComponent } from './tech-list/tech-list.component';



@NgModule({
  declarations: [
    TechItemComponent,
    TechListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TechListComponent]
})
export class TechModule { }
