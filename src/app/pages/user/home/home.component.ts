import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import ProfileService from '../profile/profile.service';
import { AuthService } from '../../../service/auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
})
export class HomeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}
  profile: any;
  userId: any;
  email: any;
  ngOnInit(): void {
    this.authService.getAccessToken().subscribe((response) => {
      this.email = this.authService.getMailUser(response.accessToken);
      this.userId = this.authService.getUserIdByMail(this.email);
      console.log(this.userId);
    });
  }
}
