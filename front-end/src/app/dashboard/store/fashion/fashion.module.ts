import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionComponent } from './fashion.component';
import { FashionService } from './fashion.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FashionComponent],
  providers:[FashionService]
})
export class FashionModule { }
