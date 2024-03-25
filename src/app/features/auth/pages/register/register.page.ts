import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage {
  errorMessage: string | null = null;

  registerForm = this.fb.group({
    email: '',
    password: '',
    rePassword: '',
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
    if (this.registerForm.invalid){
      return
    }
    const rawForm = this.registerForm.getRawValue();
    this.authService
      .register(rawForm.email as any, rawForm.password as any)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((e) => {
        console.log(e);
        this.errorMessage = e as string | null;
        this.registerForm.reset();
        this.hideErrorMessage();
      });
  }
}
