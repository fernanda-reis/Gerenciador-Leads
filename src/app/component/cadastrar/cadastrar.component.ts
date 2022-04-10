import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: Usuario = new Usuario()

  confirmedPassword: string

  constructor() { }

  ngOnInit(){ }

  confirmPassword($event: any){
    this.confirmedPassword = $event.target.value;
  }

  saveUser(){
    
    console.log(this.user)
  }

}
