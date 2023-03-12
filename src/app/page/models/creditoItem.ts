import { Credito } from "./credito";


export class CreditoItem {
    idPaymentOutDetail?: number;
    paymentOut!: Credito;
    count!: number;
    datePayment!: Date;
    capitalMoney!: number;
    taxRate!: number;
    monthlyPay!: number;
}
