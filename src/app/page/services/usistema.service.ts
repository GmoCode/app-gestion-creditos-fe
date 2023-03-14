import { IUsistema } from '../interfaces/IUsistema';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usistema } from '../models/usistema';



@Injectable({
  providedIn: 'root'
})
export class UsistemaService {

    protected url=`${environment.URL_BASE}/v1/vendedor`;

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
      buscar():Observable<IUsistema[]>{
      console.log(this.url);
      const url=`${this.url}/find-vendedores`;
      console.log(url);
      return this.http.get<IUsistema[]>(url);
    }

    buscarXId(id:number):Observable<IUsistema>{
      console.log(this.url);
      const url=`${this.url}/${id}`;
      console.log(url);
      return this.http.get<IUsistema>(url);
    }

    buscarXRUC(ruc:string):Observable<any>{
      //const url=`${this.url}/by-ruc/${ruc}`;
      const url=`${this.url}/${ruc}`;
      console.log(url)
      return this.http.get<any>(url);
    }

    insertar(usistema:Usistema):Observable<Usistema>{
      console.log(this.url);
      return this.http.post<Usistema>(this.url,usistema);

    }

    actualizar(id:number,usistema:Usistema):Observable<Usistema>{
      console.log(this.url);
      return this.http.put<Usistema>(`${this.url}/${id}`,usistema);
    }

    eliminar(id:number):Observable<Usistema>{
      console.log(this.url);
      return this.http.delete<Usistema>(`${this.url}/${id}`);
    }

    registrar(usistema:Usistema):Observable<Usistema>{
      const url=`${this.url}`;
      return this.http.post<Usistema>(url,usistema);
    }

}
