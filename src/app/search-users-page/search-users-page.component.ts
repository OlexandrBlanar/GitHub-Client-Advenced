import { Observable } from 'rxjs/Observable';
import { User } from './../services/users';
import { SearchUsersService } from './../services/search-users.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-search-users-page',
  templateUrl: './search-users-page.component.html',
  styleUrls: ['./search-users-page.component.css']
})
export class SearchUsersPageComponent implements OnInit {

  private searchQuery: string = "";
  public users: Observable<User[]>;
  public condition: boolean = true;

  constructor(private router: Router,
      private activatedRoute: ActivatedRoute,
      private service: SearchUsersService) { }

  ngOnInit() {
  }
  
  onKey(event: KeyboardEvent): void {
      // приведение event.target к типу HTMLInputElement
      this.searchQuery = (event.target as HTMLInputElement).value;
      this.users = this.service.search(this.searchQuery);
  }

  toggle(): void {
    this.condition = !this.condition;
  }

  onSelect(selected: User) {
    // Перенаправление пользователя используя относительный путь.
    this.router.navigate(["user", selected.login]);
  }
}
