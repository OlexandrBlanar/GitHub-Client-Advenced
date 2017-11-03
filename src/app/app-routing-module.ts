import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomepageComponent } from './homepage/homepage.component';
import { SearchUsersPageComponent } from './search-users-page/search-users-page.component';
import { LoginComponent } from './auth/login/login.component';

// В данном примере настройки маршрутизации выделены в отдельный модуль.

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            redirectTo: "home",
            pathMatch: "full"
        },
        { path: "home", component: HomepageComponent },
        { path: "search", component: SearchUsersPageComponent},
        { path: "login", component: LoginComponent}
    ])],
    exports: [RouterModule] // делаем re-export модуля для использования директив при маршрутизации
})
export class AppRoutingModule { }