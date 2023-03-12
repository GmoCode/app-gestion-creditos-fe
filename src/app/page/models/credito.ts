import { Usistema } from './usistema';
import { Producto } from './Producto';
import { Cliente } from './cliente';
import { Usuario } from './usuario';
import { PedidoItem } from "./PedidoItem";


export class Credito {

    idPaymentOut?: number;
    user?: Usistema;
    client?: Cliente;
    product?: Producto;
    currencyType?: string;
    loamAmount?: number;
    loamTerm?: number;
    datePaymentOut?: Date;
    total?: number;
    status?: string;
    details?:Array<PedidoItem>

}
