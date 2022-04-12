import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './component/cadastrar/cadastrar.component';
import { LeadsComponent } from './component/leads/leads.component';
import { LoginComponent } from './component/login/login.component';
import { NovoLeadComponent } from './component/novo-lead/novo-lead.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'leads', component: LeadsComponent},
  {path: 'novo-lead', component: NovoLeadComponent},
  { path: '**', pathMatch: 'full',
        component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
