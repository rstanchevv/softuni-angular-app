
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}
  get isAuthenticated() {
    return !!this.authService.user;
  }

  get displayName() {
    const email = this.authService.user?.user.email!
    const indexOf = email.indexOf('@');
    return email.substring(0, indexOf)
  }

  onLogout(ev: Event): void {
    ev.preventDefault();
    this.router.navigate(['/']);
    this.authService.user = undefined;
  }
}
