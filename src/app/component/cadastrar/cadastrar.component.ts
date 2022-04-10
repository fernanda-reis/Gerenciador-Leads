import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  user: Usuario = new Usuario();
  users: Usuario[] = [];

  confirmedPassword: string;
  isPasswordValid: boolean = false;
  isPasswordMatch: boolean = false;

  tooltipText =
    'A senha deve conter: \n' +
    '- Pelo menos 8 caracteres;\n' +
    '- Pelo menos 1 letra maiúscula;\n' +
    '- Pelo menos 1 número;\n' +
    '- Pelo menos 1 caractere especial (ex: !*@).\n';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = this.usuarioService.getUsers();
  }

  saveUser() {
    if (this.isUsuarioValid()) {
      this.usuarioService.save(this.user);
      alert('Usuário salvo com sucesso!');
      this.refresh();
    } else {
      alert('Insira os dados corretamente!');
    }
  }

  isUsuarioValid() {
    if (this.user.usuario && this.isPasswordValid && this.isPasswordMatch) {
      return true;
    } else return false;
  }

  refresh() {
    this.user = new Usuario();
    this.confirmedPassword = '';
  }

  checkForLength(): boolean {
    return this.confirmedPassword.length > 7 ? true : false;
  }

  checkForSymbol(): boolean {
    const regex: RegExp = /.*\W.*/;
    return regex.test(this.confirmedPassword);
  }

  checkForUppercase(): boolean {
    const regex: RegExp = /.*[A-Z].*/;
    return regex.test(this.confirmedPassword);
  }

  checkForDigit(): boolean {
    const regex: RegExp = /.*\d.*/;
    return regex.test(this.confirmedPassword);
  }

  validatePassword(element: HTMLInputElement) {
    const input = element;
    console.log(this.confirmedPassword);
    if (this.confirmedPassword != undefined && this.confirmedPassword != '') {
      if (
        this.checkForLength() &&
        this.checkForSymbol() &&
        this.checkForDigit() &&
        this.checkForUppercase()
      ) {
        input.setAttribute('style', 'background-color:##FFFFFF');
        this.isPasswordValid = true;
      } else {
        input.setAttribute('style', 'background-color:#FA8072');
        this.isPasswordValid = true;
      }
    } else {
      input.setAttribute('style', 'background-color:#FFFFFF');
      this.isPasswordValid = false;
    }
  }

  comparePassword(element: HTMLInputElement) {
    const input = element;

    if (this.isPasswordValid && this.user.senha) {
      if (this.user.senha != '') {
        if (this.user.senha == this.confirmedPassword) {
          input.setAttribute('style', 'background-color:##FFFFFF');
          this.isPasswordMatch = true;
        } else {
          input.setAttribute('style', 'background-color:#FA8072');
          this.isPasswordMatch = false;
        }
      } else {
        input.setAttribute('style', 'background-color:#FFFFFF');
        this.isPasswordMatch = false;
      }
    }
  }
}
