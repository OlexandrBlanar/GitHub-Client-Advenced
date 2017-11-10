import { User } from './users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class SearchUsersService {

    private url: string = 'https://api.github.com/search/users?per_page=10';
    private users: User[];

    constructor(private http: HttpClient) {}
    
    public search(searchQuery: string): Observable<User[]> {
        
        return this.http
            .get(this.url, {
                params: new HttpParams().set('q', searchQuery).set('per_page', '10')
            })
            .map(data => {
                this.users = this.extractProducts(data);
                return this.users;
                },
                err => {
                    console.log("Error")
                }
            );
    }

    private extractProducts(response): User[] {
        const res = response.items;
        const users: User[] = [];
        for (let i = 0; i < res.length; i++) {
            users.push(new User(res[i].login, res[i].url, res[i].html_url));
        }
        return users;
    }

}