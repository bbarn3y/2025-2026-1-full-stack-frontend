import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean;
  sessionKey = 'session';

  constructor() {
    this.isLoggedIn = !!localStorage.getItem(this.sessionKey);
  }

  removeSession(): void {
    localStorage.removeItem(this.sessionKey);
    this.isLoggedIn = false;
  }

  storeSession(token: string): void {
    localStorage.setItem(this.sessionKey, token);
    this.isLoggedIn = true;
  }

}
