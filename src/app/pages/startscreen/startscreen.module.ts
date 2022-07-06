import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartscreenComponent } from './startscreen.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { StartscreenRoutingModule } from './startscreen-routing.module';



@NgModule({
  declarations: [StartscreenComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatRippleModule,
    StartscreenRoutingModule
  ]
})
export class StartscreenModule { }
