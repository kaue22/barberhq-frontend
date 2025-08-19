import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

// Define as rotas para o módulo de autenticação
const routes: Routes = [
  // Quando o usuário navegar para /auth/login, mostre o LoginComponent
  { path: 'login', component: LoginComponent },

  // Se quiser uma rota padrão para /auth, pode adicionar aqui:
  // { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }