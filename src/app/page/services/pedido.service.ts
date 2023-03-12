import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPedidoVO } from '../interfaces/iPedidoVO';
import { Pedido } from '../models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  protected url=`${environment.URL_BASE}/v1/pedidos`;

  constructor(private http: HttpClient) {
  }

  buscar(cliente:string):Observable<IPedidoVO[]>{
    const url=`${this.url}/buscarxcliente?cliente=${cliente}`; // Visual Objects
    console.log(url);
    return this.http.get<IPedidoVO[]>(url);
  }

  buscarXId(id:number):Observable<Pedido>{
    const url=`${this.url}/${id}`;
    return this.http.get<Pedido>(url);
  }

  registrar(pedido:Pedido):Observable<Pedido>{
    const url=`${this.url}`;
    return this.http.post<Pedido>(url,pedido);
  }

}
