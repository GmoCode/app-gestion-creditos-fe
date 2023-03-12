import { Usuario } from './../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.URL_BASE + '/login';

  constructor(private http: HttpClient) { }

  login(usuario: Usuario): Observable<any> {
    //console.log(this.url);
    return this.http.post(this.url, usuario, { observe: 'response' })
      .pipe(map(res => {

        //console.log('res -> ' + JSON.stringify(res));
        //console.log(res);

        const token = res.headers.get('authorization') || '';

        const usuarion = usuario.userName;
        //console.log('authorization token -> ' + token);

        sessionStorage.setItem('nombreUsuario', usuarion);

        sessionStorage.setItem('token', token); /// Session Storage y Local Storage

        return res;
      }));
  }
}
