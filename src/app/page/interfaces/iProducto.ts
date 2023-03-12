import { ICategory } from './iCategory';

export interface IProducto {
    idProduct?: number;
    category?: ICategory;
    codeProduct?: number;
    nameProduct?: number;
    tax?: number;
    status?: string;
}
