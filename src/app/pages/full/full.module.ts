import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from './full.component';
import { FullRoutingModule } from './full-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UpdateModule } from '../update/update.module';



@NgModule({
  declarations: [
    FullComponent
  ],
  imports: [
    CommonModule,
    FullRoutingModule,
    MatCardModule,
    MatButtonModule,
    UpdateModule  
  ], exports: [FullComponent]
})
export class FullModule { }
