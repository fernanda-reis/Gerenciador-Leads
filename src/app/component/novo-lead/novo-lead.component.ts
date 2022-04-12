import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lead } from 'src/app/model/lead';
import { LeadService } from 'src/app/service/lead.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-novo-lead',
  templateUrl: './novo-lead.component.html',
  styleUrls: ['./novo-lead.component.css'],
})
export class NovoLeadComponent implements OnInit {
  lead: Lead = new Lead();

  oportunidades = [
    { id: 1, select: false, name: 'RPA' },
    { id: 2, select: false, name: 'Produto Digital' },
    { id: 3, select: false, name: 'Analytics' },
    { id: 4, select: false, name: 'BPM' },
  ];

  checkboxAll: boolean = false;

  constructor(private leadService: LeadService, private router: Router) {}

  ngOnInit() {
    if (environment.id == ''){
      alert('Você precisa estar logado para acessar esta página!');
      this.router.navigate(['/login']);
    }
  }

  onCheck($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    this.oportunidades = this.oportunidades.map((item) => {
      if (item.id == id) {
        item.select = isChecked;
        this.checkboxAll = false;
        return item;
      }
      if (id == -1) {
        item.select = this.checkboxAll;
        return item;
      }
      return item;
    });
  }

  saveLead() {
    this.setOportunidades()

    if(this.checkForm()) {
    this.leadService.save(this.lead);
    alert('Lead salva com sucesso!');
    this.refresh();
    } else {
      alert("Preencha os dados corretamente!")
    }
  }

  checkForm(){
    if (this.lead.nome != null && this.lead.nome != ""){
      if (this.lead.telefone != null && this.lead.telefone != ""){
        if (this.lead.email != null && this.lead.email != ""){
          if (this.lead.oportunidades.length > 0){
            return true
          }
        }
      }
    }
    return false
  }

  setOportunidades(){
    this.lead.oportunidades = [];

    const checkedOportunidades = this.oportunidades.filter(
      (item) => item.select
    );
    for (const item of checkedOportunidades) {
      this.lead.oportunidades.push(item.name);
    }
  }


  refresh() {
    this.lead = new Lead();
    this.oportunidades = this.oportunidades.map((item) => {
      item.select = false;
      return item;
    });
    this.checkboxAll = false;
  }
}
