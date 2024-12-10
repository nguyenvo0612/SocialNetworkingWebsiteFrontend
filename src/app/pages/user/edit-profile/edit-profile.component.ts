import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  selector: 'app-update-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
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
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.authService.getAccessToken().subscribe((response) => {
      this.user = this.authService.getUserInfoFromToken(response.accessToken);
      this.profile.accountId = this.user.accountId;
      console.log('update profile:', this.profile.accountId);

      this.profileService.findProfileByUserId(this.profile.accountId).subscribe(
        (profile) => {
          this.profile = profile;
          console.log('profile:', this.profile);
        },
        (error) => {
          console.error('Error loading profile', error);
        }
      );
    });
  }

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
    if (this.selectedFile) {
      const base64 = await this.convertFileToBase64(this.selectedFile);
      this.profile.avatar = base64;
    }

    this.profileService.updateProfile(this.profile).subscribe(
      (response) => {
        console.log('Profile updated successfully', response);
        this.router.navigate(['/profile']);
      },
      (error) => {
        console.error('Error updating profile', error);
      }
    );
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
