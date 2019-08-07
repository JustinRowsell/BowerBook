import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InterestDetailComponent } from './components/interest-detail/interest-detail.component';
import { NewInterestComponent } from './components/new-interest/new-interest.component';
import { NewResourceComponent } from './components/new-resource/new-resource.component';
import { NewTagComponent } from './components/new-tag/new-tag.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'interest',
    component: InterestDetailComponent
  },
  {
    path: 'new/interest',
    component: NewInterestComponent
  },
  {
    path: 'new/resource',
    component: NewResourceComponent
  },
  {
    path: 'new/tag',
    component: NewTagComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
