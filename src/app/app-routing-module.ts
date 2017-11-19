import { AuthGuard } from './guards/auth.guard';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomepageComponent } from './homepage/homepage.component';
import { SearchUsersPageComponent } from './search-users-page/search-users-page.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            redirectTo: "home",
            pathMatch: "full"
        },
        {
            path: "home",
            component: HomepageComponent
        },
        {
            path: "search",
            component: SearchUsersPageComponent,
            canActivate: [AuthGuard]
        },
        {
            path: "user/:login",
            component: UserDetailsPageComponent,
            canActivate: [AuthGuard]
        },
        {
            path: "login",
            component: LoginComponent
        }
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule { }