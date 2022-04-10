import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: Usuario = new Usuario();
  isAuthenticated: boolean = false

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {}

  login() {
      this.isAuthenticated = this.usuarioService.authentication(
      this.user.usuario,
      this.user.senha
    );

    if (this.isAuthenticated) {
      this.router.navigate(['/leads']);
    } else {
      alert('Dados incorretos!');
    }
  }
}
