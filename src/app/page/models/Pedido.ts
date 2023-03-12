
import { ICliente } from "../interfaces/iCliente";
import { PedidoItem } from "./PedidoItem";

export class Pedido {

  id!: number;
  total!: number;
  glosa!:string;
  cliente!: ICliente
  detalle!:Array<PedidoItem>


  getTotal(){
    let total=0;
    if(this.detalle){
      this.detalle.forEach(
        i=>{
          total+=i.getSubTotal();
        }
      )}
    return total;
  }

}
