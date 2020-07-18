import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout.module';

@NgModule({
  imports: [
    // CommonModule,
    // FormsModule,
    RouterModule,
    LayoutModule
  ],
  declarations: [],
  exports: [
    // CommonModule,
    // FormsModule,
    RouterModule,
    LayoutModule,
  ]
})
export class SharedModule { }
