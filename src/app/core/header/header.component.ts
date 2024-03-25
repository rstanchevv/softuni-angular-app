
import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/authUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  get isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  get displayName() {
    const email = JSON.parse(localStorage.getItem('token') as AuthUser | any).email as string;
    const indexOf = email.indexOf('@');
    return email.substring(0, indexOf)
  }

  onLogout(ev: Event): void {
    ev.preventDefault();
    this.router.navigate(['/']);
    localStorage.removeItem('token');
  }
}
