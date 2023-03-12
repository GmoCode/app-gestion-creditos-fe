import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Pasar el token
    /*if (!request.url.includes("change-password") && !this.authService.getToken()) {
      this.router.navigate(['/login'])
    }*/
    //if (this.authService.isLoggedInUser()) {
        request = request.clone({
          setHeaders: {
            authorization: sessionStorage.getItem('token')||''
            //authorization: `Bearer ${this.authService.getToken()}`,
          }
        })
    //}
    return next.handle(request);
  }

}
