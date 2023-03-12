import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICliente } from '../interfaces/iCliente';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  protected url=`${environment.URL_BASE}/v1/clientes`;

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
    buscar():Observable<ICliente[]>{
    console.log(this.url);
    const url=`${this.url}/find-clientes`;
    console.log(url);
    return this.http.get<ICliente[]>(url);
  }

  buscarXId(id:number):Observable<ICliente>{
    console.log(this.url);
    const url=`${this.url}/${id}`;
    console.log(url);
    return this.http.get<ICliente>(url);
  }

  buscarXRUC(ruc:string):Observable<any>{
    //const url=`${this.url}/by-ruc/${ruc}`;
    const url=`${this.url}/${ruc}`;
    console.log(url)
    return this.http.get<any>(url);
  }

  insertar(cliente:Cliente):Observable<Cliente>{
    console.log(this.url);
    return this.http.post<Cliente>(this.url,cliente);

  }

  actualizar(id:number,cliente:Cliente):Observable<Cliente>{
    console.log(this.url);
    return this.http.put<Cliente>(`${this.url}/${id}`,cliente);
  }

  eliminar(id:number):Observable<Cliente>{
    console.log(this.url);
    return this.http.delete<Cliente>(`${this.url}/${id}`);
  }

  registrar(cliente:Cliente):Observable<Cliente>{
    const url=`${this.url}`;
    return this.http.post<Cliente>(url,cliente);
  }
}
