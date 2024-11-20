import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
})
export class HomeComponent implements OnInit {
  user: User | null = null;
  private apiUrl = 'http://localhost:8080/api/user'; // Update to the correct backend URL
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.apiUrl, { withCredentials: true }).subscribe(
      (data) => {
        console.log('User data:', data);
        this.user = data as User;
      },
      (error) => {
        console.error('Lỗi khi lấy dữ liệu người dùng:', error);
      }
    );
  }

  login() {
    const loginUrl = `http://localhost:4200/login`;
    window.location.href = loginUrl; // Chuyển hướng đến Google OAuth
  }
}
