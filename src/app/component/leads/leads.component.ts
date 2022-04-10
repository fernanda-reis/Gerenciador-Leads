import { Lead } from 'src/app/model/lead';
import { Component, OnInit } from '@angular/core';
import { LeadService } from 'src/app/service/lead.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  leads: Lead[]

  status = ['Cliente em Potencial', 'Dados Confirmados', 'Reunião Agendada'];

  constructor(
    private leadService: LeadService
  ) { }

  ngOnInit(){
    this.getLeads()
  }

  getLeads(){
    this.leads = this.leadService.getLeads()
    console.log(this.leads)
  }

  isStatusOk(){
    
  }
}

