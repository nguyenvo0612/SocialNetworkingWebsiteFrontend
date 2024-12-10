import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ProfileService from '../profile/profile.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth-service';

interface ProfileDTO {
  nickName: string;
  realName: string;
  bio: string;
  avatar: string;
  linkWebsite: string;
  accountId: number;
}

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent implements OnInit {
  profile: ProfileDTO = {
    nickName: '',
    realName: '',
    bio: '',
    avatar: '',
    linkWebsite: '',
    accountId: 0,
  };
  user: any;

  selectedFile: File | null = null;
  previewUrl: string | null = null;

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  async onSubmit() {
    this.authService.getAccessToken().subscribe(async (response) => {
      this.user = this.authService.getUserInfoFromToken(response.accessToken);
      this.profile.accountId = this.user.accountId;
      console.log('create profile , accountId:', this.profile.accountId);
      if (this.selectedFile) {
        const base64 = await this.convertFileToBase64(this.selectedFile);
        this.profile.avatar = base64;
      }

      this.profileService.createProfile(this.profile).subscribe(
        (response) => {
          console.log('Profile created successfully', response);
          this.router.navigate(['/profile']); // Chuyển hướng sau khi tạo thành công
        },
        (error) => {
          console.error('Error creating profile', error);
        }
      );
    });
  }

  private convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }
}
