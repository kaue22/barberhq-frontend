import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true, // <-- A CHAVE ESTÁ AQUI!
  imports: [
    CommonModule, // Gerencia suas próprias dependências
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  tenantId: string = '';
  credentials = {
    email: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit(): void {
    this.errorMessage = '';

    this.authService.login(this.tenantId, this.credentials).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido!', response);
        alert('Login realizado com sucesso!');
        // this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Erro no login', err);
        if (err.status === 401 || err.status === 403) {
          this.errorMessage = 'Email ou senha inválidos.';
        } else {
          this.errorMessage = 'Ocorreu um erro. Tente novamente mais tarde.';
        }
      }
    });
  }
}