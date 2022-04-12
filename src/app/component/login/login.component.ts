import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {}

  login() {
    if (this.validateUser()) {
      this.router.navigate(['/leads']);
      environment.id = this.user.idUsuario
    } else {
      alert('Dados incorretos!');
    }
  }

  validateUser() : boolean {
    return this.usuarioService.authentication(
      this.user.usuario,
      this.user.senha
    );
  }
}
