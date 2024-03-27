import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

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
    if (this.registerForm.invalid) {
      return;
    }
    const rawForm = this.registerForm.getRawValue();
    this.authService
      .register(rawForm.email as any, rawForm.password as any)
      .subscribe({
        next: (x) => {
          console.log(x)
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.errorMessage = err;
          this.registerForm.reset();
          this.hideErrorMessage();
        },
      });
    // .((e) => {
    //   console.log(e);
    //   this.errorMessage = e as string | null;
    //   this.registerForm.reset();
    //   this.hideErrorMessage();
    // });
  }
}
