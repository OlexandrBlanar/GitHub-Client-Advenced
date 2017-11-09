import { AuthService } from './../services/auth.service';
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public authService: AuthService ) {}

    user: any;
    anyError: any;

    canActivate(): boolean {
        this.authService.user.subscribe(
            data => this.user = data,
            err => this.anyError
        )
        console.log((this.user));
        return !!this.user;
    }
}