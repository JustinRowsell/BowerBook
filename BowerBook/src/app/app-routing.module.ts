import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InterestDetailComponent } from './components/interest-detail/interest-detail.component';
import { UserLoginComponent } from './components/auth/user-login/user-login.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
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
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
