// Módulos Globales
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {APP_ROUTER_PROVIDERS, appRouting} from './app.routing';
import {FormsModule} from '@angular/forms';
import {MdlModule} from 'angular2-mdl';

// Módulos Aplicación
import {AppComponent} from './app.component';
import {MaterialesService} from './services/materiales.service';
import {HomeModule} from './home/home.module';
import {MaterialesModule} from './materiales/materiales.module';
import {ConfigService} from './services/config.service';
import {WindowRef} from './services/window-ref.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    HttpModule,
    MaterialesModule,
    MdlModule,
    appRouting,
  ],
  providers: [
    APP_ROUTER_PROVIDERS,
    ConfigService,
    MaterialesService,
    WindowRef,
  ],
})

export class AppModule {
}
