import { User } from '../services/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class UserDetailService {

    private url: string = 'https://api.github.com/users/';
    private user: any;

    constructor(private http: HttpClient) {}
    
    public getUser(loginUser: string): Observable<any> {
        const newUrl: string = this.url + loginUser; 
        return this.http
            .get(newUrl)
            .map(data => {
                console.log(data);
                this.user = data;
                return this.user;
                },
                err => {
                    console.log("Error")
                }
            );
    }
}