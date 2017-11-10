import { ActivatedRoute, Params } from '@angular/router';
import { UserDetailService } from './user-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css'],
  providers: [UserDetailService]
})
export class UserDetailsPageComponent implements OnInit {
  
  user: any;

  constructor(private service: UserDetailService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      const login = params["login"];
      this.service
          .getUser(login)
          .subscribe(result => this.user = result);  
    });
  }

}
