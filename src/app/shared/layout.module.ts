import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './app-layouts/main-layout.component';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HeaderModule,
        NavigationModule,
    ],
    declarations: [
        FooterComponent,
        MainLayoutComponent
    ],
    exports: [
        HeaderModule,
        NavigationModule,
        FooterComponent,
     //   HeaderModule
    ]
})

export class LayoutModule {

}