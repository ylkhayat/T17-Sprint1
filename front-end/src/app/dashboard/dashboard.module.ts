import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ToysComponent } from './store/toys/toys.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MyitemsComponent } from './myitems/myitems.component';
import { AllproductsComponent } from './store/allproducts/allproducts.component';
import { MyitemsService } from './myitems/myitems.service';
// import { StoreComponent } from './store/store.component';

@NgModule({
  imports: [ThemeModule,
            DashboardRoutingModule,
            FormsModule],
  declarations: [DashboardComponent,LoginComponent,ToysComponent,SignupComponent,MyitemsComponent,AllproductsComponent],
  entryComponents: [],
  providers: [MyitemsService]
})
export class DashboardModule {}
