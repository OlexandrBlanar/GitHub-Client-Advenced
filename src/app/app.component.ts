import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public title: string = 'GitHub Client Advanced';
  public user: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.user = authService.user;  
  }

  login() {
    this.router.navigate(["login"]);
  }

  logout() {
    this.authService.logout();
  }

}
