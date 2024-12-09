import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  user: any;
  showAlert: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  onLogout() {
    this.authService.logout().subscribe(
      () => {
        // Xóa token khỏi localStorage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        console.log('Logout successful');
        // Có thể chuyển hướng về trang đăng nhập hoặc trang chính
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Logout failed:', error);
      }
    );
  }

  ngOnInit(): void {
    this.authService.getAccessToken().subscribe((response) => {
      if (response.redirectUrl) {
        // Chuyển hướng đến trang nhập mã xác minh
        this.router.navigate([response.redirectUrl]);
      } else if (response.accessToken) {
        localStorage.setItem('accessToken', response.accessToken);
        // localStorage.setItem('refreshToken', response.refreshToken);
        console.log('Access token:', response.accessToken);
        console.log('Refresh token:', response.refreshToken);
        this.user = this.authService.getUserInfoFromToken(response.accessToken);
        this.showAlert = !this.user;
      }
      if (this.user) {
        console.log('User info from token:', this.user);
      } else {
        console.log('No user info found in token.');
      }
    });
  }

  // login() {
  //   // Nếu người dùng chưa đăng nhập
  //   this.showAlert = true;
  //   this.cdr.detectChanges();
  // }
}
