import { Usuario } from './../../page/models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import { MessageService } from 'primeng/api';
import { UsuarioService } from 'src/app/page/services/usuario.service';
import { ILogin } from './interfaces/ilogin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ["./login.component.scss"],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {


  frmLogin!: FormGroup;

  constructor(
               private formBuilder: FormBuilder,
               private usuarioService: UsuarioService,
               private router: Router ) {

                const token= sessionStorage.getItem('token');
                if(token) this.router.navigate(['/page/crud/clientes']);



                }

  ngOnInit() {
    this.frmLogin = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(5)]],
      clave: ['', [Validators.required, Validators.minLength(3)]],

    });

  }

  onSubmit() {
    const login: ILogin = {

      userName: this.f['usuario'].value,
      password: this.f['clave'].value,

    };
    //console.log('onSubmit...')
    this.usuarioService.login(login)
    .subscribe({
        next : (res: any) => {

        this.router.navigate(['/page/crud/clientes']);
        console.log('Login OK');
        console.log('response' + res);
        

        },
        error: ( ) => {

            console.log('error de login');


        }

      });

  }

  get f() {
    return this.frmLogin.controls;
  }

}
