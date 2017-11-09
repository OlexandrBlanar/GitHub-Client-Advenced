import { AuthGuard } from './guards/auth.guard';
import { SearchUsersService } from './services/search-users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from './environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule }   from '@angular/forms';

import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchUsersPageComponent } from './search-users-page/search-users-page.component';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchUsersPageComponent,
    UserDetailsPageComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [SearchUsersService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
