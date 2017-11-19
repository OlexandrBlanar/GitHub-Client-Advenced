import { ActivatedRoute, Params } from '@angular/router';
import { UserDetailService } from './user-details.service';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css'],
  providers: [UserDetailService]
})
export class UserDetailsPageComponent implements OnInit {

  public user: any;

  constructor(
    private userDetailService: UserDetailService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    const login: string = this.activatedRoute.snapshot.params['login'];

    this.userDetailService
      .getUser(login)
      .subscribe(result => { this.user = result })
  }

}
