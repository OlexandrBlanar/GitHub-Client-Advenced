import { Observable } from 'rxjs/Observable';
import { AuthService } from './../services/auth.service';
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public authService: AuthService ) {}

    canActivate(): Observable<boolean> | boolean {

        return this.authService.user.map((user) => !!user);

    }
}