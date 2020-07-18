import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/app-layouts/main-layout.component';

// const routes: Routes = [
  const routes: Routes = [
    {
      path: '',
      component: MainLayoutComponent,
      children: [
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
        {
          path: 'home',
          loadChildren: () => import('./containers/movies/movies.module').then(mod => mod.MoviesModule)

          // loadChildren: './containers/movies/movies.module#MoviesModule',
          // data: { pageTitle: 'movie'}
        },
      ],
    },
    // { path: '**', component: PageNotFoundComponent }
  ];
  
  // {
  //   path: '',
  //   redirectTo: 'overboarding',
  //   pathMatch: 'full'
  // },
  // /*Todas las rutas de transportista*/
  // {
  //   path: 'movies',
  //     children: [
  //   {
  //       path: 'list',
  //       loadChildren: './containers/movies/movies.module#MoviesPageModule',
  //       data: { pageTitle: 'Movies'}
  //     },
  //     ]
  //   }
  

// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
