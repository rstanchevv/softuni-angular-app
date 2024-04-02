import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechItemComponent } from './components/tech-list/tech-item.component';
import { StorePage } from './pages/store/store.component';
import { AuthGuard } from 'src/app/features/auth/auth-guard';
import { CreateItemPage } from './pages/create-item/create-item.page';
import { EditItemPage } from './pages/edit-item/edit-item.component';
import { RoleGuard } from '../auth/role-guard';

const routes: Routes = [
  {
    path: 'store',
    component: StorePage,
  },
  { path: 'store/create', pathMatch: 'full', component: CreateItemPage, canActivate: [AuthGuard] },
  { path: 'store/:id/edit', component: EditItemPage, canActivate: [AuthGuard, RoleGuard]},
  { path: 'store/:id', component: TechItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
