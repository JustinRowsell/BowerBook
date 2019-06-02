import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signInWithGoogle(): void {
    this.authService.googleLogin()
      .then(() => this.afterLogIn())
      .catch((error) => this.showLoginError(error));
  }

  afterLogIn() {
    this.router.navigate(['/']);
  }

  showLoginError(err: Error) {
    console.error(err);
  }

}
