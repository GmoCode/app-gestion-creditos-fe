import { Credito } from './../models/credito';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICredito } from '../interfaces/iCredito';



@Injectable({
  providedIn: 'root'
})
export class CreditoService {

    protected url=`${environment.URL_BASE}/v1/desembolsos`;

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
      buscar():Observable<ICredito[]>{
      console.log(this.url);
      const url=`${this.url}/find-desembolsos`;
      console.log(url);
      return this.http.get<ICredito[]>(url);
    }

    buscarXId(id:number):Observable<ICredito>{
      console.log(this.url);
      const url=`${this.url}/${id}`;
      console.log(url);
      return this.http.get<ICredito>(url);
    }


    insertar(credito:Credito):Observable<Credito>{
      console.log(this.url);
      return this.http.post<Credito>(this.url,credito);

    }

    actualizar(id:number,credito:Credito):Observable<Credito>{
      console.log(this.url);
      return this.http.put<Credito>(`${this.url}/${id}`,credito);
    }

    eliminar(id:number):Observable<Credito>{
      console.log(this.url);
      return this.http.delete<Credito>(`${this.url}/${id}`);
    }

    registrar(credito:Credito):Observable<Credito>{
      const url=`${this.url}`;
      return this.http.post<Credito>(url,credito);
    }

}
