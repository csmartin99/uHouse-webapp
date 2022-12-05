import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedadsComponent } from './savedads.component';



@NgModule({
  declarations: [
    SavedadsComponent
  ],
  imports: [
    CommonModule
  ], exports: [SavedadsComponent]
})
export class SavedadsModule { }
