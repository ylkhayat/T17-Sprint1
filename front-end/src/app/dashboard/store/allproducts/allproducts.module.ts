import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './allproducts.component';
import { AllproductsService } from './allproducts.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule, Ng2SmartTableModule
  ],
  declarations: [AllproductsComponent],
  providers:[ AllproductsService]
})
export class AllproductsModule { }
