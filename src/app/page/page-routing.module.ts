import { ProductosComponent } from './crud/productos/productos.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';

import { ClientesComponent } from './crud/clientes/clientes.component';
import { CategoriasComponent } from './crud/categorias/categorias.component';


const routes: Routes = [
  {

    path: "page",
    component: PageComponent,
    children: [
      {
        path: "crud/productos",
        component: ProductosComponent,
        data: { titulo: "crud/productos", modulo: "Index" },
      },
      {
        path: "crud/clientes",
        component: ClientesComponent,
        data: { titulo: "crud/clientes", modulo: "Index" },
      },
      {
        path: "crud/categorias",
        component: CategoriasComponent,
        data: { titulo: "crud/categorias", modulo: "Index" },
      },
      { path: "**", redirectTo: '/notfound' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
