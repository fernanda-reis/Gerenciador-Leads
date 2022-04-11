import { Lead } from 'src/app/model/lead';
import { Component, OnInit } from '@angular/core';
import { LeadService } from 'src/app/service/lead.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css'],
})
export class LeadsComponent implements OnInit {
  leads: Lead[];
  lead: Lead = new Lead();
  isDropAllowed = false;

  status = [
    { id: 1, name: 'Cliente em Potencial' },
    { id: 2, name: 'Dados Confirmados' },
    { id: 3, name: 'Reunião Agendada' },
  ];

  constructor(private leadService: LeadService) {}

  ngOnInit() {
    this.getLeads();
  }

  getLeads() {
    this.leads = this.leadService.getLeads();
  }

  drag($event: any) { 
    let id = $event.target.id;
    this.lead = this.leadService.getLeadById(id);
  }

  allowDrop($event: any, divStatus: number) {
    $event.preventDefault();
    if (this.lead.status + 1 == divStatus) {
      this.isDropAllowed = true;
    } else this.isDropAllowed = false;
  }

  drop(){
   if (this.isDropAllowed) {
      this.leadService.update(this.lead.idLead);
      this.getLeads()
   }
  }
}
