import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToysComponent } from './toys.component';
import { ToysService } from './toys.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToysComponent],
  providers: [ToysService]
})
export class ToysModule { }
