import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { emailValidator } from 'src/app/shared/utils/email-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage {
  errorMessage: string | null = null;

  registerForm = this.fb.group({
    email: ['', [Validators.required, emailValidator]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    rePassword: ['', [Validators.required]],
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
