import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    this.handleLogin();
  }

  handleLogin() {
    // Logic for handling login
  }

  loginWithGoogle() {
    const googleAuthUrl = `http://localhost:8080/oauth2/authorization/google`;
    window.location.href = googleAuthUrl; // Chuyển hướng người dùng tới Google OAuth
  }
}
