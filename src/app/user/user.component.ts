import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode'; // Import đúng hàm giải mã

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  user: any;
  private apiUrl = 'http://localhost:8080/api/user'; // URL Backend để lấy access token

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Gọi API để lấy access token
    this.http
      .get<{ accessToken: string }>(this.apiUrl, { withCredentials: true })
      .subscribe(
        (response) => {
          const accessToken = response.accessToken;
          console.log('Access Token:', accessToken);

          // Giải mã access token
          const decodedToken = this.decodeToken(accessToken);
          if (decodedToken) {
            console.log('User Info:', decodedToken);
            this.user = decodedToken;
          }
        },
        (error) => {
          console.error('Error fetching token:', error);
        }
      );
  }

  // Hàm giải mã access token
  private decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}
