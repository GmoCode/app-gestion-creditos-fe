

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Cliente } from '../../models/cliente';


import { Producto } from '../../models/Producto';
import { ClienteService } from '../../services/cliente.service';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    providers: [MessageService]
})
export class ClientesComponent implements OnInit {

  clienteDialog: boolean = false;

  deleteClienteDialog: boolean = false;

  deleteClientesDialog: boolean = false;

  clientes: Array<Cliente> = [];


  products: Producto[] = [];

  product: Producto = {};

  client: Cliente = {};

  selectedClients: Cliente[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];



  constructor(private clienteService: ClienteService, private messageService: MessageService,private formBuilder: FormBuilder,) { }

  ngOnInit() {
//      this.productService.getProducts().then(data => this.products = data);


/*
      this.cols = [
          { field: 'product', header: 'Product' },
          { field: 'price', header: 'Price' },
          { field: 'category', header: 'Category' },
          { field: 'rating', header: 'Reviews' },
          { field: 'inventoryStatus', header: 'Status' }
      ];
*/
      this.statuses = [
          { label: 'INSTOCK', value: 'instock' },
          { label: 'LOWSTOCK', value: 'lowstock' },
          { label: 'OUTOFSTOCK', value: 'outofstock' }
      ];

      this.buscar();
  }
    buscar() {

    this.clienteService.buscar().subscribe(
      {
        next: (res) => {
          this.clientes = res;
          console.log(res)
          //this.pagedItems = this.clientes.slice(0, this.itemsPerPage);

        },
        error: () => {
          console.log('Error al listar clientes')
        }
      }

    )
    }

  openNew() {
      this.client = {};
      this.submitted = false;
      this.clienteDialog = true;
  }

  deleteSelectedProducts() {
      this.deleteClienteDialog = true;
  }

  editProduct(client: Cliente) {
      this.client = { ...client };
      this.clienteDialog = true;
  }

  deleteProduct(client: Cliente) {
      this.deleteClienteDialog = true;
      this.client = { ...client };

  }

  confirmDeleteSelected() {
      this.deleteClienteDialog = false;
      this.clientes = this.clientes.filter(val => !this.selectedClients.includes(val));
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted 1', life: 3000 });
      this.selectedClients = [];
  }

  confirmDelete() {
      this.deleteClienteDialog = false;

      this.clienteService.eliminar(this.client.idClient!).subscribe(
        {
            next: (res) => {
              //console.log(res)
              this.messageService.add({ severity: 'success', summary: '¡ Éxito !', detail: 'Cliente Elimando Exitosamente', life: 4000 });
              this.buscar()
            },
            error: () => {
              console.log('Error al eliminar cliente 123')

            }
          }
        )

  }

  hideDialog() {
      this.clienteDialog = false;
      this.submitted = false;
      this.buscar();
  }

saveProduct() {
console.log(this.client)

this.submitted = true;

if(this.client.idClient){

this.clienteService.registrar(this.client).subscribe(
        {
        next: (res) =>{
        console.log('Registro Ok');
        this.messageService.add({ severity: 'success', summary: '¡ Éxito !', detail: 'Cliente Actualizado Exitosamente', life: 4000 });
        //this.msgExito();
        this.clienteDialog = false;
        this.client = {};
        this.buscar();
        },
        error:() =>{
        //this.msgError()
        }
    }
    )
} else {
    this.clienteService.registrar(this.client).subscribe(
        {
        next: (res) =>{
            console.log('Registro Ok');
            this.messageService.add({ severity: 'success', summary: '¡ Éxito !', detail: 'Cliente Creado Exitosamente', life: 4000 });
            //this.msgExito();
            this.clienteDialog = false;
            this.client = {};
            this.buscar();
        },
        error:() =>{
            //this.msgError()
        }
        }
    )
}

}

  findIndexById(id: number): number {
      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].idProduct === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  createId(): string {
      let id = '';
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 5; i++) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
