
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';


@Component({
    selector: 'app-categorias',
    templateUrl: './categorias.component.html',
    providers: [MessageService]
})
export class CategoriasComponent implements OnInit {

  categoryDialog: boolean = false;

  deleteCategoryDialog: boolean = false;

  deleteCategoriesDialog: boolean = false;

  categories: Category[] = [];

  category: Category = {};

  selectedCategories: Category[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  constructor(private categoryService: CategoryService, private messageService: MessageService) { }

  ngOnInit() {
     // this.categoryService.getProducts().then(data => this.categories = data);


      this.statuses = [
          { label: 'INSTOCK', value: 'instock' },
          { label: 'LOWSTOCK', value: 'lowstock' },
          { label: 'OUTOFSTOCK', value: 'outofstock' }
      ];
      this.buscar();
  }

  buscar() {

    this.categoryService.buscar().subscribe(
      {
        next: (res) => {
          this.categories = res;
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
      this.category = {};
      this.submitted = false;
      this.categoryDialog = true;
  }

  deleteSelectedCategories() {
      this.deleteCategoryDialog = true;
  }

  editProduct(category: Category) {
      this.category = { ...category };
      this.categoryDialog = true;
  }

  deleteProduct(category: Category) {
      this.deleteCategoryDialog = true;
      this.category = { ...category };
  }

  confirmDeleteSelected() {
      this.deleteCategoryDialog = false;
      this.categories = this.categories.filter(val => !this.selectedCategories.includes(val));
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      this.selectedCategories = [];
  }

  confirmDelete() {
    this.deleteCategoryDialog = false;

    this.categoryService.eliminar(this.category.idCategory!).subscribe(
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
      this.categoryDialog = false;
      this.submitted = false;
  }

  saveProduct() {
    console.log(this.category)

    this.submitted = true;

    if(this.category.idCategory){

    this.categoryService.registrar(this.category).subscribe(
          {
          next: (res) =>{
            console.log('Registro Ok');
            this.messageService.add({ severity: 'success', summary: '¡ Éxito !', detail: 'Cliente Actualizado Exitosamente', life: 4000 });
            //this.msgExito();
            this.categoryDialog = false;
            this.category = {};
            this.buscar();
          },
          error:() =>{
            //this.msgError()
          }
        }
      )
    } else {
        this.categoryService.registrar(this.category).subscribe(
            {
            next: (res) =>{
              console.log('Registro Ok');
              this.messageService.add({ severity: 'success', summary: '¡ Éxito !', detail: 'Cliente Creado Exitosamente', life: 4000 });
              //this.msgExito();
              this.categoryDialog = false;
              this.category = {};
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
      for (let i = 0; i < this.categories.length; i++) {
          if (this.categories[i].idCategory === id) {
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
