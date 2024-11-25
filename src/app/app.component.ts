import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LoginTeamplateFrontend';
  isLoginPage: boolean = false;
  isCreateProfilePage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCreateProfilePage = this.router.url === '/create_profile';
        this.isLoginPage = this.router.url === '/login';
      }
    });
  }
}
