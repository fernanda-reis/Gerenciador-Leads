import { Lead } from 'src/app/model/lead';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  leads: Lead[]

  constructor() { }

  ngOnInit(){}

  getLeads(){

  }
}

