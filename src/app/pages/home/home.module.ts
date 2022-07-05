import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { StartscreenModule } from '../startscreen/startscreen.module';
import { CardModule } from '../property/card/card.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    StartscreenModule,
    CardModule,
    FormsModule
  ], exports: [HomeComponent]
})
export class HomeModule { }
