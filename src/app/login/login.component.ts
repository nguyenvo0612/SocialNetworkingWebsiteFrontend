import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.handleLogin();
  }

  handleLogin() {
    // Logic for handling login
  }

  loginWithGoogle() {
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=871201635349-nudin6ukk5qri1j95uqogr62l9sispgn.apps.googleusercontent.com&scope=profile%20email&redirect_uri=http://localhost:8080/login/oauth2/code/google`;
    window.location.href = googleAuthUrl; // Chuyển hướng người dùng tới Google OAuth
  }
}
