import { AuthService } from './../services/auth.service';
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public authService: AuthService ) {}

    isUser: boolean;

    canActivate(): boolean {
        this.authService.user.subscribe(
            data => {if(data) this.isUser = true;},
            err => console.log(err)
        )
        return this.isUser;
    }
}