import {Routes, RouterModule} from '@angular/router';
import {MaterialesComponent} from './materiales.component';
import {MaterialesEditComponent} from './materiales-edit.component';
import {ModuleWithProviders} from '@angular/core';

export const materialesRoutes: Routes = [
  { component: MaterialesComponent , path: 'materiales' },
  { component: MaterialesEditComponent, path: 'materiales/:idMaterial' },
];

export const materialesRouting: ModuleWithProviders = RouterModule.forChild(materialesRoutes);
