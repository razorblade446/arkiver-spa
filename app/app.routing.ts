import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
];

export const APP_ROUTER_PROVIDERS: any = [];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
