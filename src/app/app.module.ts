import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';

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
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
