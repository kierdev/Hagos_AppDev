import { Injectable, OnInit } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  canActivate() {
    return this.authenticate;
  }

  authenticate: boolean = false;

  accounts: any[] = [
    { accountUsername: 'admin', accountPassword: 'admin' },
    { accountUsername: 'user1', accountPassword: 'user1' },
  ];

  checkCredentials(username: string, password: string) {
    this.authenticate = this.accounts.some(
      (account) =>
        account.accountUsername === username &&
        account.accountPassword === password
    );
  }
  constructor() {}
}
