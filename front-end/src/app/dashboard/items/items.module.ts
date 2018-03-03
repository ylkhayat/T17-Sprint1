import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ItemsComponent } from './items.component';

@NgModule({
  imports: [
    CommonModule,Ng2SmartTableModule,

  ],
  declarations: [ItemsComponent],
  entryComponents: [],
  providers: [ItemsComponent]
})
export class ItemsModule { }
