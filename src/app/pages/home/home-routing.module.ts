import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'startscreen', pathMatch: 'full'},
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'startscreen',
                loadChildren: () => import('./../startscreen/startscreen.module').then(m => m.StartscreenModule)
            },
            {
                path: 'property',
                loadChildren: () => import('./../property/property.module').then(m => m.PropertyModule)
            }
        ]
    },
    //{ path: '', component: HomeComponent }
    //{path: '', redirectTo: 'startscreen', pathMatch: 'full'},
    //{path: 'startscreen', loadChildren(): () => import('./../component: StartscreenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }