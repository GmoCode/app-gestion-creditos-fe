import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './services/app.layout.service';



@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },

            {
                label: 'Paneles',
                icon: 'pi pi-fw pi-briefcase',
                items: [

                    {
                      label: 'Administración',
                      icon: 'pi pi-fw pi-pencil',
                      items: [
                          {
                              label: 'Clientes',
                              icon: 'pi pi-fw pi-id-card',
                              routerLink: ['/page/crud/clientes']
                          },

                          {
                              label: 'Categorias',
                              icon: 'pi pi-fw pi-bookmark',
                              routerLink: ['/page/crud/categorias/']
                          },
                          {
                              label: 'Productos',
                              icon: 'pi pi-fw pi-box',
                              routerLink: ['/page/crud/productos']
                          }
                      ]
                  },{
                    label: 'Créditos',
                    icon: 'pi pi-fw pi-money-bill',
                    items: [
                        {
                            label: 'Nuevo Crédito',
                            icon: 'pi pi-fw pi-sign-in',
                            routerLink: ['/auth/login']
                        },
                        {
                            label: 'Productos',
                            icon: 'pi pi-fw pi-times-circle',
                            routerLink: ['/auth/error']
                        },
                        {
                            label: 'Access Denied',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/auth/access']
                        }
                    ]
                },
                {
                  label: 'Usuarios',
                  icon: 'pi pi-fw pi-users',
                  items: [
                      {
                          label: 'Login',
                          icon: 'pi pi-fw pi-sign-in',
                          routerLink: ['/login']
                      },
                      {
                          label: 'Error',
                          icon: 'pi pi-fw pi-times-circle',
                          routerLink: ['/auth/error']
                      },
                      {
                          label: 'Access Denied',
                          icon: 'pi pi-fw pi-lock',
                          routerLink: ['/auth/access']
                      }
                  ]
              },

                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                        ]
                    }
                ]
            },

        ];
    }
}
