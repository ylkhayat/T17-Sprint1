import { Component, Input, OnInit } from '@angular/core';


import { regService} from '/Users/ziad/T17-Sprint1/front-end/src/app/services/reg.services' ;

//import { regService} from '../../../services/reg.services' ;

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import {UserOb} from '../../../objects/UserObject';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { LocalDataSource } from 'ng2-smart-table';
import { NbRegisterComponent} from '../../../../../../front-end/node_modules/@nebular/auth/components/register/register.component'


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() position = 'normal';
  user: any;
  userMenu: any[];
  obs :UserOb[];
  users: LocalDataSource=new LocalDataSource();
  NbRegisterComponent:NbRegisterComponent;
  







  ngOnInit() {
    
    this.userMenu = [{ title: 'Profile' },{ title: 'Settings' },{ title: 'Logout' }];
//-------------------------------------register linking----------------------------------------------
//---------------------------------------------------------------------------------------------------
       /* var hoba =document.cookie;
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split('`');
        var userob =  {
                fullname:ca[1],
                email:ca[2],
                password:ca[3]
         }
         console.log(userob);
         this.regService.addReg(userob).subscribe(Response=>{
         this.users.add(userob);
         console.log(this.users);

         });*/
    //-----------------------------------registerlinking---------------------------------------------------
    //-----------------------------------------------------------------------------------------------------

  }


  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private regService:regService

    // UserOb:UserOb
     
    


  ) {}

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  login(){
    window.location.href="#/auth/login"
  }

  signup(){
    window.location.href="#/auth/register"
  }

  onMenuClick(event) {
    if (event.title === 'Logout') {
      // Think about what to do ;)
    }
  }
}
