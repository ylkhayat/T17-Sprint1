import { Component, OnInit } from '@angular/core';
import { LocalDataSource,Ng2SmartTableModule } from 'ng2-smart-table';
import { ElectronicsService } from './electronics.service';

@Component({
  selector: 'app-electronics',
  template: `<h1>
  Electronics Products

 </h1>

 <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>


 `,
  styleUrls: ['./electronics.component.scss'],
})
export class ButtonComponent implements OnInit {



  constructor() { }

  ngOnInit() {}


}
