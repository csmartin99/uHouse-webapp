import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyadsComponent } from './myads.component';
import { MatTableModule } from '@angular/material/table';
import { MyadsRoutingModule } from './myads-routing.module';


@NgModule({
  declarations: [
    MyadsComponent
  ],
  imports: [
    CommonModule,
    MyadsRoutingModule,
    MatTableModule
  ], exports: [MyadsComponent]
})
export class MyadsModule { }
