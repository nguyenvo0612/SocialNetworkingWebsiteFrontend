import { Component } from '@angular/core';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

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
}
