import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class PostReviewComponent {
  selectedImages: string[] = [];
  postContent: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedImages = navigation.extras.state['images'];
    }
  }

  submitPost() {
    // Handle post submission logic here
    console.log('Post content:', this.postContent);
    console.log('Selected images:', this.selectedImages);
  }

  removeImage(index: number) {
    this.selectedImages.splice(index, 1);
  }
}
