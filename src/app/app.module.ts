import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CadastrarComponent } from './component/cadastrar/cadastrar.component';
import { LeadsComponent } from './component/leads/leads.component';
import { LoginComponent } from './component/login/login.component';
import { NovoLeadComponent } from './component/novo-lead/novo-lead.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LeadsComponent,
    LoginComponent,
    CadastrarComponent,
    NovoLeadComponent,
    PageNotFoundComponent,

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
