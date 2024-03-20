import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authenticate = false;

  constructor() {}
  canActivate() {
    return this.authenticate;
  }
}
