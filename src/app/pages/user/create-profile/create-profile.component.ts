import { Component } from '@angular/core';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent {
  profile = {
    realname: '',
    nickname: '',
    bio: '',
    avatar: null,
  };

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profile.avatar = file; // Lưu file vào biến avatar
    }
  }

  onSubmit() {
    // Xử lý gửi form, có thể gửi dữ liệu lên server
    console.log('Profile data:', this.profile);
    // Thực hiện các hành động khác như gọi API để lưu profile
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      // Xử lý tệp đã chọn, ví dụ: cập nhật avatar
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profile.avatar = e.target.result; // Cập nhật avatar
      };
      reader.readAsDataURL(file);
    }
  }
}
