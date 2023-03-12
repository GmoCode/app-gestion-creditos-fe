import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SidebarService {
  
  menu: any = [
    {
      titulo: "Panel",
      isSubMenu: false,
      url: '/page/panel',
      idItem:1,
      subMenu: []
    },
    {
      titulo: "Mantenimiento",
      isSubMenu: true,
      url: '/page/mantenimiento',
      idItem:2,
      subMenu: [
        { titulo: "Clientes", url: "/page/mantenimiento/clientes" },
        { titulo: "Productos", url: "/page/mantenimiento/productos" },
      ]
    },
    {
      titulo: "Seguridad",
      isSubMenu: true,
      url: '/page/seguridad',
      idItem:2,
      subMenu: [
        { titulo: "Usuarios", url: "/page/seguridad/usuarios" },
        { titulo: "Roles", url: "/page/seguridad/roles" },
      ]
    },
    {
      titulo: "Procesos",
      isSubMenu: true,
      url: '/page/procesos',
      idItem:3,
      subMenu: [
        { titulo: "Pedidos", url: "/page/procesos/pedidos" },
      ]
    },

  ];
  constructor() {}
}
