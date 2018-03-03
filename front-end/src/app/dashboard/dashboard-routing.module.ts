import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MyitemsComponent } from './myitems/myitems.component';
import { ElectronicsComponent } from './store/electronics/electronics.component';
import { ToysComponent } from './store/toys/toys.component';
import { FoodComponent } from './store/food/food.component';
import { FashionComponent } from './store/fashion/fashion.component';
import { SportsComponent } from './store/sports/sports.component';
import { AllproductsComponent } from './store/allproducts/allproducts.component';
import { ItemsComponent } from './items/items.component';

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
      path:'myitems',
      component: MyitemsComponent
    },
    {
      path:'items',
      component:ItemsComponent
    },
    { path: 'authe',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    {
      path: 'signup',
      component: SignupComponent
    }
  ]},
    {
      path: 'store',
      children: [
        {
        path: 'allproducts',
        component: AllproductsComponent
        },
        {
          path: 'electronics',
          component: ElectronicsComponent
        },
        {
          path: 'sportstore',
          component: SportsComponent,
        },
        {
          path: 'foodstore',
          component: FoodComponent,
        },
        {
          path: 'fashionstore',
          component: FashionComponent,
        },
        {
          path: 'toystore',
          component: ToysComponent,
        },
      ],

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
