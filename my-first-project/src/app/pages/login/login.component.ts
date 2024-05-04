import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importe o Router
import { AuthService } from '../../auth.service';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, 
  templateUrl: './login.component.html',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule], // Aqui está sendo importado os módulos necessários para o componente, como SharedModule, CommonModule, FormsModule e ReactiveFormsModule
  styleUrls: ['./login.component.scss'] // Aqui está sendo importado os arquivos de estilo do componente
})
export class LoginComponent {

// loginForm: FormGroup
loginForm: FormGroup
submitted:boolean = false

items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

constructor(
  private formBuilder: FormBuilder,
  private router: Router
){
 this.loginForm = this.formBuilder.group({
  email:['',[Validators.required, Validators.email]],
  senha:['',[Validators.required]]
 })
}
// constructor(
//   private formBuilder: FormBuilder,
//   private router: Router
// ){
//   this.loginForm = this.formBuilder.group({
//   email: ['', [Validators.required, Validators.email]], // Aqui está sendo definindo um campo 'email' com um valor padrão e validadores de email obrigatório
//   senha: ['', [Validators.required]] // Aqui está sendo definido um campo 'senha' com um valor padrão e validador obrigatório
//   })
// }

onSubmit(){
this.submitted = true
if(this.loginForm.valid){
  const email = this.loginForm.value.email
  const senha = this.loginForm.value.senha
  if(email === "user@email.com" && senha === "1234"){
    alert("Crendencias tão correta")
    this.router.navigate(['/home'])
  }
  else{
    alert("Senhas e senha não conferem")
  }
 }
}

// //     onSubmit() {
//       this.submitted = true;
//         if (this.loginForm.valid) { // Verifica se o formulário é válido
//           const email = this.loginForm.value.email; // Obtém o valor do campo 'email' do formulário
//           const senha = this.loginForm.value.senha; // Obtém o valor do campo 'senha' do formulário
    
//           if (email === 'user@email.com' && senha ==="1234") { // Chama o método de autenticação do AuthService
//             // alert('Credenciais Conferem'); // Exibe uma mensagem de sucesso
//             this.router.navigate(['/home']); // Redireciona o usuário para a página home
//           } else {
//             // alert('Credenciais inválidas'); // Exibe uma mensagem de erro
//           }
//         }
//     }









    




  // loginForm: FormGroup; // Aqui está sendo declarado uma variável loginForm do tipo FormGroup
  // submitted:boolean = false
  // constructor(
  //   private formBuilder: FormBuilder, // Aqui está sendo injetado o FormBuilder para criar formulários reativos
  //   private router: Router // Aqui está sendo injetado o Router para redirecionar o usuário após a autenticação
  // ) {
  //   this.loginForm = this.formBuilder.group({ // Aqui está sendo inicializado o formulário de login utilizando o FormBuilder
  //     email: ['', [Validators.required, Validators.email]], // Aqui está sendo definindo um campo 'email' com um valor padrão e validadores de email obrigatório
  //     senha: ['', [Validators.required]] // Aqui está sendo definido um campo 'senha' com um valor padrão e validador obrigatório
  //   });
  // }

  // onSubmit() {
  //   this.submitted = true
  //   if (this.loginForm.valid) { // Verifica se o formulário é válido
  //     const email = this.loginForm.value.email; // Obtém o valor do campo 'email' do formulário
  //     const senha = this.loginForm.value.senha; // Obtém o valor do campo 'senha' do formulário

  //     if (email === 'user@email.com' && senha ==="1234") { // Chama o método de autenticação do AuthService
  //       alert('Credenciais Conferem'); // Exibe uma mensagem de sucesso
  //       this.router.navigate(['/home']); // Redireciona o usuário para a página home
  //     } else {
  //       alert('Credenciais inválidas'); // Exibe uma mensagem de erro
  //     }
  //   }
  // }
}


