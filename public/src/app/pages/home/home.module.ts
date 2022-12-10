import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MenuModule,
    HomeRoutingModule
  ], exports: [HomeComponent]
})
export class HomeModule { }
