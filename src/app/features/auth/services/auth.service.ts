import { Injectable } from '@angular/core';
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { BehaviorSubject, Observable, from, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$$ = new BehaviorSubject<UserCredential | undefined>(undefined);
  private user$ = this.user$$.asObservable()
  user: UserCredential | undefined;
  constructor(private auth: Auth) {
    this.user$.subscribe(user => {
      this.user = user
    })
  }

  get isLogged() {
    return !!this.user
  }

  register(email: string, password: string):Observable<UserCredential> {
    const promise = createUserWithEmailAndPassword(
      this.auth,
      email,
      password);
    const obs = from(promise)
    return obs.pipe(tap((user) => {
      this.user$$.next(user)
    }))
  }

  login(email: string, password: string): Observable<UserCredential> {
    const promise = signInWithEmailAndPassword(this.auth, email, password)
    const obs = from(promise);
    return obs.pipe(tap((user) => {
      this.user$$.next(user)
    }))
  }
}
