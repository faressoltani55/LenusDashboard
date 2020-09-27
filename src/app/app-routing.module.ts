import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from "./security/auth-guard/auth-guard.service";

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./layouts/default/default.module')
      .then(m => m.DefaultModule),
    canActivate : [AuthGuardService]
  },
  {
    path: 'auth',
    loadChildren: () => import('./layouts/auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
