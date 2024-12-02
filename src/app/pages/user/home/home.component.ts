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
    this.email = this.authService.getMailUser;
    console.log('sdfsdfdsfsdfasdfsdfsf', this.email);
    // this.authService.getUserIdByMail(this.email).subscribe((userId) => {
    //   this.userId = userId;
    //   this.profileService
    //     .findProfileByUserId(this.userId)
    //     .subscribe((response) => {
    //       this.profile = response;
    //       console.log(this.profile);
    //     });
    // });
  }
}
