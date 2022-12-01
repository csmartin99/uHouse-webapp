import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from './full.component';
import { FullRoutingModule } from './full-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UpdateModule } from '../update/update.module';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    FullComponent
  ],
  imports: [
    CommonModule,
    FullRoutingModule,
    MatCardModule,
    MatButtonModule,
    UpdateModule,
    GoogleMapsModule,
  ], exports: [FullComponent]
})
export class FullModule { }
