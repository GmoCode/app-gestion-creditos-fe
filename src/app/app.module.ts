import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { SharedModule } from './shared/shared.module';
import { AppMenuComponent } from './shared/app.menu.component';
  import { PageModule } from './page/page.module';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from './page/crud/productos/productos.component';
import { LoginComponent } from './public/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StyleClassModule } from 'primeng/styleclass';
import {RippleModule} from 'primeng/ripple';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { InputTextModule } from 'primeng/inputtext';
import { ModalModule } from 'ngx-bootstrap/modal';
import {PasswordModule } from 'primeng/password';
import { AuthInterceptor } from './public/interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent

  ],
  imports: [

    BrowserModule,
    RouterModule,

    BrowserAnimationsModule,
    StyleClassModule,
    RippleModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,

    // Importaciones
    ReactiveFormsModule,
    HttpClientModule,



    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    PageModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
