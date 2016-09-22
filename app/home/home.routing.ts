import {HomeComponent} from './home.component';
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const homeRoutes: Routes = [
  { component: HomeComponent, path: 'home' },
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
