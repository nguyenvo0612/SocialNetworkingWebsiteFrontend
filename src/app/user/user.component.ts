import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getAccessToken().subscribe((response) => {
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      console.log('Access token:', response.accessToken);
      console.log('Refresh token:', response.refreshToken);
    });
    this.user = this.authService.getUserInfoFromToken();
    if (this.user) {
      console.log('User info from token:', this.user);
    } else {
      console.log('No user info found in token.');
    }
  }
}
