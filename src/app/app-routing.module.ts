import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// lazy-loading
const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'startscreen',
        loadChildren: () => import('./pages/startscreen/startscreen.module').then(m => m.StartscreenModule)
    },
    {
        path: 'add',
        loadChildren: () => import('./pages/add/add.module').then(m => m.AddModule)
    },
    {
        path: 'property',
        loadChildren: () => import('./pages/property/property.module').then(m => m.PropertyModule)
    },
    {
        path: 'reg',
        loadChildren: () => import('./pages/reg/reg.module').then(m => m.RegModule)
    },
    {
        path: 'log',
        loadChildren: () => import('./pages/log/log.module').then(m => m.LogModule)
    },
    {
        path: 'full',
        loadChildren: () => import('./pages/full/full.module').then(m => m.FullModule)
    },
    {
        path: 'myads',
        loadChildren: () => import('./pages/myads/myads.module').then(m => m.MyadsModule)
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }