
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';


import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/Producto';
import { CategoryService } from '../../services/category.service';


@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    providers: [MessageService]
})
export class ProductosComponent implements OnInit {

  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  category: Category[] = [];

  products: Producto[] = [];

  product: Producto = {};

  selectedProducts: Producto[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  categories: Category[] = [];

  rowsPerPageOptions = [5, 10, 20];

  constructor(private productoService: ProductoService, private categoryService: CategoryService, private messageService: MessageService) { }

  ngOnInit() {

     // this.productService.getProducts().then(data => this.products = data);


      this.buscar();
      this.categoryService.buscar().subscribe(

        {
            next: (res) => {
              this.categories = res;
              console.log("categorias",this.categories)
              //this.pagedItems = this.clientes.slice(0, this.itemsPerPage);

            },
            error: () => {
              console.log('Error al listar clientes')
            }
          }

      )
    }

    buscar() {

      this.productoService.buscar().subscribe(
        {
          next: (res) => {
            this.products = res;
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
    this.buscar();
  }

  saveProduct() {

    console.log(this.product)

    this.submitted = true;

    if(this.product.idProduct){

    this.productoService.registrar(this.product).subscribe(
            {
            next: (res) =>{
            console.log('Registro Ok');
            this.messageService.add({ severity: 'success', summary: '¡ Éxito !', detail: 'Cliente Actualizado Exitosamente', life: 4000 });
            //this.msgExito();
            this.productDialog = false;
            this.product = {};
            this.buscar();
            },
            error:() =>{
            //this.msgError()
            }
        }
        )
    } else {
        this.productoService.registrar(this.product).subscribe(
            {
            next: (res) =>{
                console.log('Registro Ok');
                this.messageService.add({ severity: 'success', summary: '¡ Éxito !', detail: 'Cliente Creado Exitosamente', life: 4000 });
                //this.msgExito();
                this.productDialog = false;
                this.product = {};
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
