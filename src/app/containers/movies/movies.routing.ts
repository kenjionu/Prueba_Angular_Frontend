import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";
import {MoviesComponent} from "./movies.component";

export const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
  }
];


export const routing = RouterModule.forChild(routes);
