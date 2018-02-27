import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
// import { AboutComponent } from './about/about.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
      {
          path: '',
          loadChildren : './about/about.module#AboutModule'
      },
    {
      path:'items',
      loadChildren : './items/items.module#ItemsModule'
    },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
