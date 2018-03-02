import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AllproductsComponent } from './allproducts.component';

@NgModule({
  imports: [
    CommonModule, Ng2SmartTableModule
  ],
  declarations: [AllproductsComponent]
})
export class AllproductsModule { }
