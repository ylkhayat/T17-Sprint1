import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './food.component';
import { FoodService } from './food.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FoodComponent],
  providers: [FoodService]
})
export class FoodModule { }
