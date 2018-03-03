import { Component, Input, OnInit } from '@angular/core';

import { regService} from '../../../services/reg.services' ;
import { NbMenuService, NbSidebarService } from '@nebular/theme';

import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { DashboardComponent } from '../../../dashboard/dashboard.component';


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() position = 'normal';
  user: any;
  userMenu: any[];
  divid : Number;
  public edited = true;





  ngOnInit() {

    
      if(window.sessionStorage.email=="null"){
        this.edited = false;   } 
          else 
      {
        this.edited = true;    
    this.userMenu = [{ title: 'Profile' },{ title: 'Settings' }];

  }
  }

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private regService:regService
  ) {}

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  
  

  signout(event){
    this.menuService.navigateHome;     
    window.location.href="#/dashboard"
    setTimeout(function() { alert("You are a guest now"); }, 5);
   window.sessionStorage.email="null";
this.edited = false;

    window.location.reload();

  }

  onMenuClick(event) {
    if (event.title == 'Profile') {
      // Think about what to do ;)
      console.log('aywa');
     // window.location.href="#/auth/register"
    }
  }
}