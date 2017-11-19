import { Observable } from 'rxjs/Observable';
import { User } from './../services/users';
import { SearchUsersService } from './../services/search-users.service';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-search-users-page',
  templateUrl: './search-users-page.component.html',
  styleUrls: ['./search-users-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchUsersPageComponent implements OnInit {

  public users: Observable<User[]>;
  public condition: boolean = true;
  public searchFormControl = new FormControl;
  public searchQuery: string = '';

  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private searchUsersService: SearchUsersService,
  ) { }

  ngOnInit() {
    this.searchFormControl.valueChanges
        .subscribe(newValue => {
            this.searchQuery = newValue;
            this.router.navigate([], { queryParams: { searchQuery: this.searchQuery } });
        });
        
    this.activatedRoute.queryParams
        .debounceTime(200)
        .subscribe((queryParam: any) => {
                if(this.searchQuery) {
                    this.users = this.searchUsersService.search(this.searchQuery);
                } else {
                    this.searchQuery = queryParam['searchQuery'];
                    if(this.searchQuery) {
                        this.users = this.searchUsersService.search(this.searchQuery);
                    } else {
                        this.searchQuery = '';
                    }
                }
            }
        );
  }

  toggle() {
      this.condition = !this.condition;
  }

}
