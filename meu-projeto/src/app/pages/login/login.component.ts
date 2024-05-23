import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ContentWindowComponent } from '../../shared/content-window/content-window.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule, ContentWindowComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup
  submitted:boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router

  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    })
  }
  onSubmit() {
    this.submitted = true
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email
      const senha = this.loginForm.value.senha
      if (email === "user@email.com" && senha === "1234") {
        alert("Crendencias tão correta")
        this.router.navigate(['/home'])
      } else {
        alert("Senhe e senha não conferem")
      }
    }
  }
}


