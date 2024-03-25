import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';
import { AboutPage } from './features/about/pages/about/about.page';

const routes: Routes = [
  {path: 'about', component: AboutPage},
  {path: '**', pathMatch: 'full', redirectTo: '/404'},
  {path: '404', component: ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
