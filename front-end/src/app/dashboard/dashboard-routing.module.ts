import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
<<<<<<< HEAD
=======
// import { AboutComponent } from './about/about.component';
>>>>>>> 03c8f86fb39d3e8991cc64dfc2cc933565acd729

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
<<<<<<< HEAD
{ path:'items',
loadChildren : './items/items.module#ItemsModule'
},
=======
      {
          path: '',
          loadChildren : './about/about.module#AboutModule'
      },
    {
      path:'items',
      loadChildren : './items/items.module#ItemsModule'
    },

>>>>>>> 03c8f86fb39d3e8991cc64dfc2cc933565acd729

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
