import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { MemberRoutingModule } from './member-routing.module';

import { MemberComponent } from './member.component';

@NgModule({
  imports: [ThemeModule, MemberRoutingModule],
  declarations: [MemberComponent],
  providers: []
})
export class MemberModule {}
