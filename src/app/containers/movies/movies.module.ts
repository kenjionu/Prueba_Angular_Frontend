import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './movies.routing';
import { MoviesComponent } from './movies.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        routing
    ],
    
    declarations: [MoviesComponent],

  })
  export class MoviesModule {}
  