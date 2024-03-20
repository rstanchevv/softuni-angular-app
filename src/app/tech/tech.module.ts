import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechListComponent } from './tech-list/tech-list.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TechListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule
  ],
  exports: [TechListComponent]
})
export class TechModule { }
