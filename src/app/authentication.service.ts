import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  currentPage = 1;
  authenticate = false;

  constructor() {}
  canActivate() {
    return this.authenticate;
  }
}
