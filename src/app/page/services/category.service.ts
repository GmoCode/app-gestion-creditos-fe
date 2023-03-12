import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../interfaces/iCategory';
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  protected url=`${environment.URL_BASE}/v1/categorias`;

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
    buscar():Observable<ICategory[]>{
    console.log(this.url);
    const url=`${this.url}/find-categorias`;
    console.log(url);
    return this.http.get<ICategory[]>(url);
  }

  buscarXId(id:number):Observable<ICategory>{
    console.log(this.url);
    const url=`${this.url}/${id}`;
    console.log(url);
    return this.http.get<ICategory>(url);
  }

  buscarXRUC(ruc:string):Observable<any>{
    //const url=`${this.url}/by-ruc/${ruc}`;
    const url=`${this.url}/${ruc}`;
    console.log(url)
    return this.http.get<any>(url);
  }

  insertar(category:Category):Observable<Category>{
    console.log(this.url);
    return this.http.post<Category>(this.url,category);

  }

  actualizar(id:number,category:Category):Observable<Category>{
    console.log(this.url);
    return this.http.put<Category>(`${this.url}/${id}`,category);
  }

  eliminar(id:number):Observable<Category>{
    console.log(this.url);
    return this.http.delete<Category>(`${this.url}/${id}`);
  }

  registrar(category:Category):Observable<Category>{
    const url=`${this.url}`;
    return this.http.post<Category>(url,category);
  }
}
