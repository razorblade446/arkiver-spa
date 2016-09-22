import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialesComponent} from './materiales.component';
import {MaterialesEditComponent} from './materiales-edit.component';
import {materialesRouting} from './materiales.routing';

@NgModule({
  declarations: [
    MaterialesComponent,
    MaterialesEditComponent,
  ],
  imports: [
    CommonModule,
    materialesRouting,
  ],
})

export class MaterialesModule {
}
