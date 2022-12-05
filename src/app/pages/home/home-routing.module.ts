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
            },
            {
                path: 'myads',
                loadChildren: () => import('./../myads/myads.module').then(m => m.MyadsModule)
            },
            {
                path: 'savedads',
                loadChildren: () => import('../savedads/savedads.module').then(m => m.SavedadsModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./../profile/profile.module').then(m => m.ProfileModule)
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