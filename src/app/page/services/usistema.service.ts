import { IProducto } from '../interfaces/iProducto';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/Producto';



@Injectable({
  providedIn: 'root'
})
export class UsistemaService {

    protected url=`${environment.URL_BASE}/v1/productos`;

    constructor(private http: HttpClient) {
      //super()
    }
  /*
    buscar(razonSocial:string):Observable<ICliente[]>{
      console.log(this.url);
      const url=`${this.url}/by-razonSocial?razonSocial=${razonSocial}`;
      console.log(url);
      return this.http.get<ICliente[]>(url);
    }*/
      buscar():Observable<IProducto[]>{
      console.log(this.url);
      const url=`${this.url}/find-productos`;
      console.log(url);
      return this.http.get<IProducto[]>(url);
    }

    buscarXId(id:number):Observable<IProducto>{
      console.log(this.url);
      const url=`${this.url}/${id}`;
      console.log(url);
      return this.http.get<IProducto>(url);
    }

    buscarXRUC(ruc:string):Observable<any>{
      //const url=`${this.url}/by-ruc/${ruc}`;
      const url=`${this.url}/${ruc}`;
      console.log(url)
      return this.http.get<any>(url);
    }

    insertar(producto:Producto):Observable<Producto>{
      console.log(this.url);
      return this.http.post<Producto>(this.url,producto);

    }

    actualizar(id:number,producto:Producto):Observable<Producto>{
      console.log(this.url);
      return this.http.put<Producto>(`${this.url}/${id}`,producto);
    }

    eliminar(id:number):Observable<Producto>{
      console.log(this.url);
      return this.http.delete<Producto>(`${this.url}/${id}`);
    }

    registrar(producto:Producto):Observable<Producto>{
      const url=`${this.url}`;
      return this.http.post<Producto>(url,producto);
    }

}
