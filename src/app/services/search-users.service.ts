import { User } from './users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class SearchUsersService {

    private url: string = 'https://api.github.com/search/users?per_page=10';

    constructor(private http: HttpClient) { }

    public search(searchQuery: string): Observable<User[]> {

        const params = '10';

        return this.http
            .get(this.url, {
                params: new HttpParams().set('q', searchQuery).set('per_page', '10')
            })
            .map(data => {
                    return this.extractUsers(data);
                },
                err => {
                    console.log("Error")
                }
            );
    }

    private extractUsers(response): User[] {

        const users: User[] = response.items.map((user) => {
            return new User(user);
        });

        return users;
    }

}