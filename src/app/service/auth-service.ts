// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  backendUrl = environment.BACKEND_URL;
  private apiUrl = `${this.backendUrl}/auth/api`;
  private logoutUrl = `${this.backendUrl}/logout`;
  private tokenKey = 'accessToken';
  constructor(private http: HttpClient, private router: Router) {}

  // Hàm để lấy access token
  getAccessToken(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      withCredentials: true,
    });
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

  getMailUser(token: string): any {
    const decodedToken = this.decodeToken(token);
    if (decodedToken && decodedToken.sub) {
      return decodedToken.sub;
    }
  }
  getUserIdByMail(mail: string): Observable<any> {
    const respronse = this.http.get<any>(
      `${this.backendUrl}/api/user/find-userid/${mail}`
    );
    return respronse;
  }

  handleAuthCallback() {
    // Kiểm tra xem có token trong localStorage không
    const token = localStorage.getItem('accessToken');
    if (token) {
      const userInfo = this.getUserInfoFromToken(token); // Lấy thông tin người dùng
      console.log('User info from token:', userInfo);
      this.router.navigate(['/']); // Chuyển hướng về trang chính
    } else {
      // Nếu chưa có token, gọi API để lấy token
      this.getAccessToken().subscribe(
        (response) => {
          localStorage.setItem('accessToken', response.accessToken);
          const userInfo = this.getUserInfoFromToken(response.accessToken); // Lấy thông tin người dùng
          console.log('User info from token:', userInfo);
          this.router.navigate(['/']); // Chuyển hướng về trang chính
        },
        (error) => {
          console.error('Error fetching access token:', error);
        }
      );
    }
  }

}
