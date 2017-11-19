import { User } from '../services/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";


@Injectable()
export class UserDetailService {

    private url: string = 'https://api.github.com/users/';

    constructor(private http: HttpClient) {}
    
    public getUser(loginUser: string): Observable<any> {
        const newUrl: string = this.url + loginUser; 
        
        return this.http
            .get(newUrl)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}
