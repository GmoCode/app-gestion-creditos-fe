import { IProducto } from "../interfaces/iProducto";

export class PedidoItem {
  id?: number;
  cantidad!: number;
  precio!: number;
  producto!:IProducto;
  estado!:string;

  public getSubTotal(){
    return this.precio*this.cantidad;
  }
}
