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
    this.leads.push(lead)
    localStorage.setItem("bd_leads", JSON.stringify(this.leads))
  }

  // getLeads() : Lead[] {
  //   if(localStorage.getItem("bd_leads")){
  //     this.leads = JSON.parse(localStorage.getItem("bd_leads"))
  //   } else {
  //     this.leads = []
  //   }

  //   return this.leads
  // }
}
