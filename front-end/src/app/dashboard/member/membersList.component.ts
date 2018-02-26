import { MemberComponent } from './member.component';

@app-dashboard-member({
  selector: 'app-dashboard-membersList',
  template: `


<nb-layout center>
  <nb-layout-header>Great Company</nb-layout-header>

  <nb-layout-column>
   MemberComponent
  </nb-layout-column>

  <nb-layout-footer>Contact us</nb-layout-footer>
</nb-layout>



`


})
export class MembersListComponent {}
