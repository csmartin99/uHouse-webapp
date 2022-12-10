import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { SavedadsComponent } from './savedads.component';

const routes: Routes = [
  { path: '', component: SavedadsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedadsRoutingModule { }