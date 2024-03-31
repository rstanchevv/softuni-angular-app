import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechItemComponent } from './components/tech-list/tech-item.component';
import { StorePage } from './pages/store/store.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { AuthGuard } from 'src/app/features/auth/auth-guard';

const routes: Routes = [
  {
    path: 'store',
    component: StorePage,
  },
  { path: 'store/create', pathMatch: 'full', component: CreateItemComponent, canActivate: [AuthGuard] },
  { path: 'store/:id', component: TechItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
