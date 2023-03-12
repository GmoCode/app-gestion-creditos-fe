import { AppFooterComponent } from './app.footer.component';
import { AppMenuComponent } from './app.menu.component';
import { AppSidebarComponent } from './sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { HeaderComponent } from './header.component';
import { AppMenuitemComponent } from './app.menuitem.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AppSidebarComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppFooterComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ToolbarModule
  ],
  exports: [
    HeaderComponent,
    AppSidebarComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppFooterComponent

  ]
})
export class SharedModule { }
