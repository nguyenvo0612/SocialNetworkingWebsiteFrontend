import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-verify-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css'],
})
export class VerifyAccountComponent implements OnInit {
  backendUrl = environment.BACKEND_URL;
  email: any;
  verificationCode: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.email = params['email'];
    });
  }

  verifyAccount() {
    const url = `${this.backendUrl}/api/account/verify/${this.email}/${this.verificationCode}`;
    this.http.post(url, {}).subscribe(
      (response) => {
        console.log('Account verified successfully', response);
        this.router.navigate(['/success']);
      },
      (error) => {
        console.error('Verification failed', error);
      }
    );
  }
}
