import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedadsComponent } from './savedads.component';
import { SavedadsRoutingModule } from './savedads-routing.module';



@NgModule({
  declarations: [
    SavedadsComponent
  ],
  imports: [
    CommonModule,
    SavedadsRoutingModule
  ], exports: [SavedadsComponent]
})
export class SavedadsModule { }
