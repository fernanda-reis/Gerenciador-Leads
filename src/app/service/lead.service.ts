import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Lead } from '../model/lead';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  leads: Lead[] = []

  constructor() { }

  save(lead: Lead){
    lead.idLead = Guid.create().toString()
    lead.status = 1;
    this.leads.push(lead)
    localStorage.setItem("bd_leads", JSON.stringify(this.leads))
  }

  getLeads() : Lead[] {
    if(localStorage.getItem("bd_leads")){
      this.leads = JSON.parse(localStorage.getItem("bd_leads")!)
    } else {
      this.leads = []
    }
    return this.leads
  }

  getLeadById(id: string) : Lead {    
    this.leads = this.getLeads()
    const index = this.leads.findIndex((i) => i.idLead == id)
    return this.leads[index]
  }

  update(id: string){
    this.leads = this.getLeads()
    const index = this.leads.findIndex((i) => i.idLead == id)
    this.leads[index].status += 1
    localStorage.setItem("bd_leads", JSON.stringify(this.leads))
  }
}
