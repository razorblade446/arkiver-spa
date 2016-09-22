import {HomeComponent} from './home.component';
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeMenuComponent} from './home-menu.component';

const homeRoutes: Routes = [
  {
    children: [
      {
        component: HomeComponent,
        path: '',
      },
      {
        component: HomeMenuComponent,
        outlet: 'top-menu',
        path: '',
      },
    ],
    path: 'home',
  },
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
