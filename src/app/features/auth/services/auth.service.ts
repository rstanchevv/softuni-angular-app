import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  register(email: string, password: string): Promise<any> {
    const promise = createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    ).then((res) => {
      localStorage.setItem('token', JSON.stringify(res.user));
    });
    return promise;
  }

  login(email: string, password: string): Promise<any> {
    const promise = signInWithEmailAndPassword(this.auth, email, password).then((res) => {
      localStorage.setItem('token', JSON.stringify(res.user));
    })
    return promise;
  }
}
