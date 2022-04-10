import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  users: Usuario[] = [];
  isAuthenticated: boolean = false;

  constructor() {}

  save(user: Usuario) {
    user.idUsuario = Guid.create().toString();
    this.users.push(user);
    localStorage.setItem('bd_users', JSON.stringify(this.users));
  }

  getUsers(): Usuario[] {
    if (localStorage.getItem('bd_users')) {
      this.users = JSON.parse(localStorage.getItem('bd_users')!);
    } else {
      this.users = [];
    }
    return this.users;
  }

  authentication(usuario: string, senha: string): boolean {
    this.users = this.getUsers();

    for (const user of this.users) {
      if (user.usuario == usuario && user.senha == senha) {
        this.isAuthenticated = true;
      }
    }
    return this.isAuthenticated;
  }
}
