// Módulos Globales
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {APP_ROUTER_PROVIDERS, ROUTING} from "./app.routing";
import {FormsModule} from "@angular/forms";

// Modulos Aplicación

import {UsuariosComponent} from "./components/usuarios";
import {HomeComponent} from "./components/home";
import {MaterialesComponent} from "./components/materiales";
import {MaterialesService} from "./services/materiales";
import {EditarMaterialComponent} from "./components/materiales/edit";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    EditarMaterialComponent,
    HomeComponent,
    MaterialesComponent,
    UsuariosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ROUTING,
  ],
  providers: [
    APP_ROUTER_PROVIDERS,
    MaterialesService,
  ],
})

export class AppModule {
}
