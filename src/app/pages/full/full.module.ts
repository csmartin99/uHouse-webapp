import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from './full.component';



@NgModule({
  declarations: [
    FullComponent
  ],
  imports: [
    CommonModule
  ], exports: [FullComponent]
})
export class FullModule { }
