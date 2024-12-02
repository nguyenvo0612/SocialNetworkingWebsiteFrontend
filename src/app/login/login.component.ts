import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from '../service/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any;
  email: string = '';
  password: string = '';
  backendUrl = environment.BACKEND_URL;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.handleAuthCallback();
  }

  onSubmit() {
    this.handleLogin();
  }

  handleLogin() {
    // Logic for handling login
  }

  loginWithGoogle() {
    const googleAuthUrl = `${this.backendUrl}/oauth2/authorization/google`;
    window.location.href = googleAuthUrl; // Chuyển hướng người dùng tới Google OAuth
  }
}
