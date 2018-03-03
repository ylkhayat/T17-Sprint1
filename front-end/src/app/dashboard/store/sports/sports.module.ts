import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsComponent } from './sports.component';
import { SportsService } from './sports.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SportsComponent],
  providers: [SportsService]
})
export class SportsModule { }
