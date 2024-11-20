// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private backendUrl = `${environment.BACKEND_URL}`; // Địa chỉ API của bạn

  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    return this.http.get(`${this.backendUrl}/auth/login`, {
      withCredentials: true,
    });
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.backendUrl}/auth/user`, {
      withCredentials: true,
    });
  }
}
