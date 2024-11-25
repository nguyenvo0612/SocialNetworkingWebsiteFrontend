// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/user';
  private logoutUrl = 'http://localhost:8080/logout';

  constructor(private http: HttpClient) {}

  // Hàm để lấy access token
  getAccessToken(): Observable<{ accessToken: string; refreshToken: string }> {
    return this.http.get<{ accessToken: string; refreshToken: string }>(
      this.apiUrl,
      {
        withCredentials: true,
      }
    );
  }

  // Hàm giải mã access token
  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
  getUserInfoFromToken(token: string): any {
    if (token) {
      return this.decodeToken(token);
    }
    return null;
  }

  // Hàm đăng xuất
  logout(): Observable<any> {
    return this.http.post<any>(this.logoutUrl, {}, { withCredentials: true });
  }
}
