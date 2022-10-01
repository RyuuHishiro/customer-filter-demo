import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumerFilterPage } from './costumer-filter/pages/costumer-filter/costumer-filter.page';

const routes: Routes = [
  { path: 'costumer-filter.page', component: CostumerFilterPage },
  { path: '', redirectTo: '/costumer-filter.page', pathMatch: 'full' },
  { path: '**', component: CostumerFilterPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
