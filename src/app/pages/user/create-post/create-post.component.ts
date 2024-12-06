import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent {
  selectedImages: string[] = [];
  constructor(private router: Router) {}

  onFilesSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files) {
      this.selectedImages = Array.from(fileInput.files).map((file) =>
        URL.createObjectURL(file)
      );
      // Navigate to the post review page
      this.router.navigate(['/post-review'], {
        state: { images: this.selectedImages },
      });
    }
  }

  removeImage(index: number) {
    this.selectedImages.splice(index, 1);
  }
}
