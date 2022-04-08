import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { CadastrarComponent } from './view/cadastrar/cadastrar.component';
import { LeadsComponent } from './view/leads/leads.component';
import { NovaLeadComponent } from './view/nova-lead/nova-lead.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'leads', component: LeadsComponent},
  {path: 'nova-lead', component: NovaLeadComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
