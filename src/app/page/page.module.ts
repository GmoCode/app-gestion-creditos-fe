import { CategoriasComponent } from './crud/categorias/categorias.component';
import { AppMenuComponent } from './../shared/app.menu.component';
import { PanelComponent } from './panel/panel.component';
import { ProductosComponent } from './crud/productos/productos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import {StyleClassModule} from 'primeng/styleclass';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from '@angular/router';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AppRoutingModule } from '../app-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { ClientesComponent } from './crud/clientes/clientes.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';


@NgModule({
    declarations: [
        PageComponent,
        PanelComponent,
        ProductosComponent,
        ClientesComponent,
        CategoriasComponent

    ],
    imports: [
        StyleClassModule,
        HttpClientModule,
        DropdownModule,
        RadioButtonModule,
        TableModule,
        ButtonModule,
        RippleModule,
        InputNumberModule,
        FileUploadModule,
        CommonModule,
        DialogModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        MessagesModule,
        MessageModule,

        //ttpClientModule,
        ReactiveFormsModule,
        ToastModule,
        ToolbarModule,
        // Forms template
        FormsModule,
        // Custom module
        PageRoutingModule,

        RouterModule,
        AppRoutingModule,
        //
        PaginationModule.forRoot(),
        ModalModule.forRoot(),
        SharedModule,

    ]
})
export class PageModule { }
