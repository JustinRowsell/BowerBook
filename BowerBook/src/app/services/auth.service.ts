import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/auth/User';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;

  constructor() {}

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.user !== null;
  }

  googleLogin() {
  }

  private oAuthLogin(provider) {
  }
}
