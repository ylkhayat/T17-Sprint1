import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';

import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() position = 'normal';
  user: any;
  userMenu: any[];






  ngOnInit() {

    this.userMenu = [{ title: 'Profile' },{ title: 'Settings' },{ title: 'Logout' }];

  }


  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService
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
<<<<<<< HEAD

=======
>>>>>>> 03c8f86fb39d3e8991cc64dfc2cc933565acd729
  }
}
