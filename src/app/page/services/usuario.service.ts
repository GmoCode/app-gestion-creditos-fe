import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.URL_BASE + '/login';

  constructor(private http: HttpClient) { }

  login(usaurio: Usuario): Observable<any> {
    //console.log(this.url);
    return this.http.post(this.url, usaurio, { observe: 'response' })
      .pipe(map(res => {

        //console.log('res -> ' + JSON.stringify(res));
        //console.log(res);

        const token = res.headers.get('authorization') || '';

        //console.log('authorization token -> ' + token);

        sessionStorage.setItem('token', token); /// Session Storage y Local Storage

        return res;
      }));
  }
}
