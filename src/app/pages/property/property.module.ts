import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { PropertyComponent } from './property.component';

@NgModule({
  declarations: [PropertyComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [PropertyComponent]
})
export class PropertyModule { }
