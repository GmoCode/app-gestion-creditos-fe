import { ClienteService } from './../../services/cliente.service';
import { Cliente } from './../../models/cliente';
import { CreditoService } from './../../services/credito.service';

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Category } from '../../models/category';


import { Credito } from '../../models/credito';
import { Producto } from '../../models/Producto';
import { CategoryService } from '../../services/category.service';
import { ProductoService } from '../../services/producto.service';
import { Usistema } from '../../models/usistema';



@Component({
    selector: 'app-creditos',
    templateUrl: './creditos.component.html',
    providers: [MessageService]
})
export class CreditosComponent implements OnInit {

  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

usuarios: Usistema[] = [];

usuario: Usistema = {};

clientes: Cliente [] = [];

cliente: Cliente = {};

  creditos: Credito [] = [];

  products: Producto [] = [];

  credito: Credito = {};

  product: Producto = {};

  selectedProducts: Producto[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  categories: Category[] = [];

  rowsPerPageOptions = [5, 10, 20];

  constructor(private clienteService: ClienteService ,private creditoService: CreditoService, private productoService: ProductoService, private categoryService: CategoryService, private messageService: MessageService) { }

  ngOnInit() {

     // this.productService.getProducts().then(data => this.products = data);


        this.buscar();

        this.buscarProductos();

        this.buscarClientes();

        }

    buscar() {

        this.creditoService.buscar().subscribe(
        {
            next: (res) => {
            this.creditos = res;
            console.log(res)
            //this.pagedItems = this.clientes.slice(0, this.itemsPerPage);

            },
            error: () => {
                console.log('Error al listar Desembolsos')
            }
        }

        )
    }

    buscarProductos() {

        this.productoService.buscar().subscribe(
        {
            next: (res) => {
            this.products = res;
            console.log(res)
            //this.pagedItems = this.clientes.slice(0, this.itemsPerPage);

            },
            error: () => {
                console.log('Error al listar Desembolsos')
            }
        }

        )
    }

    buscarUsuarios() {

        this.productoService.buscar().subscribe(
        {
            next: (res) => {
            this.products = res;
            console.log(res)
            //this.pagedItems = this.clientes.slice(0, this.itemsPerPage);

            },
            error: () => {
                console.log('Error al listar Desembolsos')
            }
        }

        )
    }

    buscarClientes() {

        this.clienteService.buscar().subscribe(
        {
            next: (res) => {
            this.clientes = res;
            console.log(res)
            //this.pagedItems = this.clientes.slice(0, this.itemsPerPage);

            },
            error: () => {
                console.log('Error al listar Clientes')
            }
        }

        )
    }


    openNew() {

        this.submitted = false;
        this.productDialog = true;
    }

  deleteSelectedProducts() {
      this.deleteProductsDialog = true;
  }

  editProduct(product: Producto) {
      this.product = { ...product };
      this.productDialog = true;
  }

  deleteProduct(product: Producto) {
      this.deleteProductDialog = true;
      this.product = { ...product };
  }

  confirmDeleteSelected() {
      this.deleteProductsDialog = false;
      this.products = this.products.filter(val => !this.selectedProducts.includes(val));
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      this.selectedProducts = [];
  }

  confirmDelete() {
      this.deleteProductDialog = false;
      this.products = this.products.filter(val => val.idProduct !== this.product.idProduct);
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      this.product = {};
  }

  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }

  saveProduct() {
      this.submitted = true;


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
