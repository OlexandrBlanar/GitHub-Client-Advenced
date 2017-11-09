import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title: string = 'GitHub Client Advanced';

  constructor(public authService: AuthService, private router: Router) {}

  login() {
    this.router.navigate(["login"]);
  }

  logout() {
    this.authService.logout();
  }

}
