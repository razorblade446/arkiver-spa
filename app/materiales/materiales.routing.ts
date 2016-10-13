import {Routes, RouterModule} from '@angular/router';
import {MaterialesComponent} from './materiales.component';
import {MaterialesEditComponent} from './materiales-edit.component';
import {ModuleWithProviders} from '@angular/core';
import {MaterialesCargarComponent} from './materiales-cargar.component';
import {MaterialesMenuComponent} from './materiales-menu.component';

export const materialesRoutes: Routes = [
  {
    children: [
      {component: MaterialesCargarComponent, path: 'cargar', pathMatch: 'full'},
      {component: MaterialesComponent, path: '', pathMatch: 'full'},
      {component: MaterialesMenuComponent, outlet: 'top-menu', path: ''},
      {component: MaterialesEditComponent, path: ':idMaterial', pathMatch: 'full'},
    ],
    path: 'materiales',
  },
];

export const materialesRouting: ModuleWithProviders = RouterModule.forChild(materialesRoutes);
