import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
      {
          path: 'member',
          component: MemberComponent
      },
{ path:'items'
loadChildren : './items/items.module#ItemsModule'
},

      {
        path: '',
        redirectTo: 'member',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
