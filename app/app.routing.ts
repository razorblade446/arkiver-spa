import {provideRoutes, RouterModule, Routes} from "@angular/router";
import {UsuariosComponent} from "./components/usuarios";
import {HomeComponent} from "./components/home";
import {MaterialesComponent} from "./components/materiales";
import {ModuleWithProviders} from "@angular/core";
import {EditarMaterialComponent} from "./components/materiales/edit";

export const ROUTES: Routes = [{
  component: UsuariosComponent,
  path: "usuarios",
}, {
  component: MaterialesComponent,
  path: "materiales",
}, {
  component: EditarMaterialComponent,
  path: "materiales/:id/edit",
}, {
  component: HomeComponent,
  path: "",
} ];

export const APP_ROUTER_PROVIDERS = [
  provideRoutes(ROUTES)
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
