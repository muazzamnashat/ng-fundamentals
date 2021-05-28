import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({ templateUrl: './login.component.html' })
export class LoginComponent {
  userName: string;
  password: string;
  constructor(private authService: AuthService, private router: Router) {}
  login(formValue) {
    this.authService.loginUser(formValue.userName, formValue.password);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
