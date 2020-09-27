import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from "./default.component";

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children : [
      {
        path: '',
        loadChildren: () => import('../../modules/pages/dashboard/dashboard.module')
          .then(m => m.DashboardModule)
      },
      {
        path: 'clients',
        loadChildren: () => import('../../modules/pages/clients/clients.module')
          .then(m => m.ClientsModule)
      },
      {
        path: 'feedbacks',
        loadChildren: () => import('../../modules/pages/feedbacks/feedbacks.module')
          .then(m => m.FeedbacksModule)
      },
      {
        path: 'requests',
        loadChildren: () => import('../../modules/pages/requests/requests.module')
          .then(m => m.RequestsModule)
      },
      {
        path: 'reservations',
        loadChildren: () => import('../../modules/pages/reservations/reservations.module')
          .then(m => m.ReservationsModule)
      },
      {
        path: 'health',
        loadChildren: () => import('../../modules/pages/health/health.module')
          .then(m => m.HealthModule)
      }
    ]
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
