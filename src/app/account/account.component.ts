import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-service';

@Component({
  selector: 'app-user',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  account: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getAccessToken().subscribe((response) => {
      localStorage.setItem('accessToken', response.accessToken);
      // localStorage.setItem('refreshToken', response.refreshToken);
      console.log('Access token:', response.accessToken);
      console.log('Refresh token:', response.refreshToken);
      this.account = this.authService.getUserInfoFromToken(
        response.accessToken
      );
      if (this.account) {
        console.log('User info from token:', this.account);
      } else {
        console.log('No user info found in token.');
      }
    });
  }
}
