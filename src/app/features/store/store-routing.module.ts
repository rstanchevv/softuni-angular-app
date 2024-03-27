import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechItemComponent, } from './components/tech-list/tech-item.component';
import { StorePage } from './pages/store/store.component';
import { AuthGuard } from 'src/app/core/auth-guard';

const routes: Routes = [
  {
    path: 'store',
    component: StorePage,
    canActivate: [AuthGuard]
  },
  { path: 'store/:id', component: TechItemComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
