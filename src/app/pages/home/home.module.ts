import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { StartscreenModule } from '../startscreen/startscreen.module';
import { CardModule } from '../property/card/card.module';
import { FormsModule } from '@angular/forms';
import { LogModule } from '../log/log.module';
import { RegModule } from '../reg/reg.module';
import { MenuModule } from '../menu/menu.module';
import { PropertyModule } from '../property/property.module';
import { FullModule } from '../full/full.module';
import { PostModule } from '../post/post.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AddModule } from '../add/add.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    StartscreenModule,
    CardModule,
    FormsModule,
    LogModule,
    RegModule,
    MenuModule,
    PropertyModule,
    FullModule,
    PostModule,
    MatDialogModule,
    AddModule
  ], exports: [HomeComponent]
})
export class HomeModule { }
