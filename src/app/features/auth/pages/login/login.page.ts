import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {
  errorMessage: string | null = null;
  loginForm = this.fb.group({
    email: '',
    password: '',
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  hideErrorMessage(): void {
    setTimeout(() => {
      this.errorMessage = null;
    }, 2000);
  }

  onSubmit(): void {
    if (this.loginForm.invalid){
      return;
    }
    const rawForm = this.loginForm.getRawValue();
    this.authService
      .login(rawForm.email as any, rawForm.password as any)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((e) => {
        console.log(e);
        this.errorMessage = e as string | null;
        this.loginForm.reset();
        this.hideErrorMessage();
      });
  }
}
