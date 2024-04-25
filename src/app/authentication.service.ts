import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private router: Router) {}

  setAuthentication(auth: boolean) {
    if (auth) {
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      localStorage.setItem('isLoggedIn', 'false');
    }
  }

  canActivate() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  async signup(email: string, password: string) {
    const auth = getAuth();
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  async login(email: string, password: string) {
    const auth = getAuth();
    return await signInWithEmailAndPassword(auth, email, password);
  }
}
