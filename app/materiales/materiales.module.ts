import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialesComponent} from './materiales.component';
import {MaterialesEditComponent} from './materiales-edit.component';
import {materialesRouting} from './materiales.routing';
import {MaterialesCargarComponent} from './materiales-cargar.component';
import {MaterialesMenuComponent} from './materiales-menu.component';
import {FileUploadModule} from 'ng2-file-upload';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MaterialesCargarComponent,
    MaterialesComponent,
    MaterialesEditComponent,
    MaterialesMenuComponent,
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    FormsModule,
    materialesRouting,
  ],
  providers: [],
})

export class MaterialesModule {}
