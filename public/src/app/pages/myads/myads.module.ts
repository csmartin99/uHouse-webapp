import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyadsComponent } from './myads.component';
import { MatTableModule } from '@angular/material/table';
import { MyadsRoutingModule } from './myads-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MyadsComponent
  ],
  imports: [
    CommonModule,
    MyadsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ], exports: [MyadsComponent]
})
export class MyadsModule { }
