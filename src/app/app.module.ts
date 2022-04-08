import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadsComponent } from './view/leads/leads.component';
import { NovaLeadComponent } from './view/nova-lead/nova-lead.component';
import { LoginComponent } from './view/login/login.component';
import { CadastrarComponent } from './view/cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadsComponent,
    NovaLeadComponent,
    LoginComponent,
    CadastrarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
