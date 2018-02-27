import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
<<<<<<< HEAD
=======
// import { MemberComponent } from './member/member.component';
>>>>>>> 03c8f86fb39d3e8991cc64dfc2cc933565acd729

@NgModule({
  imports: [ThemeModule, DashboardRoutingModule],
  declarations: [DashboardComponent],
  entryComponents: [],
  providers: []
})
export class DashboardModule {}
