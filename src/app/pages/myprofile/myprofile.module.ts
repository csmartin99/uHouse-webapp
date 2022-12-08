import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyprofileComponent } from './myprofile.component';
import { CardModule } from '../property/card/card.module';
import { MyprofileRoutingModule } from './myprofile-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentModule } from '../comment/comment.module';



@NgModule({
  declarations: [
    MyprofileComponent
  ],
  imports: [
    CommonModule,
    MyprofileRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommentModule
  ], exports: [MyprofileComponent]
})
export class MyprofileModule { }
