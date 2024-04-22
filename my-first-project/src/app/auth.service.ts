import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Esse serviço será provido em toda a aplicação
})
export class AuthService {
  private usuarioPredefinido = { email: 'usuario@example.com', senha: 'senha123' }; // Define um usuário pré-definido com email e senha

  constructor() { } // Construtor padrão do serviço

  login(email: string, senha: string): boolean { // Método para realizar o login, recebe email e senha como parâmetros e retorna um booleano
    if (email === this.usuarioPredefinido.email && senha === this.usuarioPredefinido.senha) { // Verifica se o email e a senha fornecidos correspondem ao usuário pré-definido
      return true; // Retorna true se as credenciais estiverem corretas
    } else {
      return false; // Retorna false se as credenciais estiverem incorretas
    }
  }
}
