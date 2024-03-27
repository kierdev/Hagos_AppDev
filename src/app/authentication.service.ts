import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authenticate: boolean = false;

  // ACCOUNT CREDENTIALS
  accounts: any[] = [
    { accountUsername: 'admin', accountPassword: 'admin' },
    { accountUsername: 'user1', accountPassword: 'user1' },
  ];

  constructor() {}

  checkCredentials(username: string, password: string) {
    return this.accounts.some(
      (account) =>
        account.accountUsername === username &&
        account.accountPassword === password
    );
  }
}
