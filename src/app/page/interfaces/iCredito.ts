import { Cliente } from "../models/cliente";
import { PedidoItem } from "../models/PedidoItem";
import { Producto } from "../models/Producto";
import { Usuario } from "../models/usuario";

export interface ICredito {
    idPaymentOut?: number;
    user?: Usuario;
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
