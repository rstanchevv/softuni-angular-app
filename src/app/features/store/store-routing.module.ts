import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechListComponent } from './components/tech-list/tech-list.component';

const routes: Routes = [
  {
    path: 'store',
    component: TechListComponent,
  },
  { path: 'home/store/:id', component: TechListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
