import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { MyadsComponent } from './myads.component';

const routes: Routes = [
  { path: '', component: MyadsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyadsRoutingModule { }