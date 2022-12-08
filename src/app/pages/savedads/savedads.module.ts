import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedadsComponent } from './savedads.component';
import { SavedadsRoutingModule } from './savedads-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SavedadsComponent
  ],
  imports: [
    CommonModule,
    SavedadsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ], exports: [SavedadsComponent]
})
export class SavedadsModule { }
