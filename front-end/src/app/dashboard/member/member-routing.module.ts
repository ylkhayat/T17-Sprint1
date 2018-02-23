import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberComponent } from './member.component';

const routes: Routes = [
  { path: '/member/getMembers', component: MemberComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule {}
