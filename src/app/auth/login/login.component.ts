import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  public email: string;
  public password: string;
  public user: Observable<firebase.User>;
  public authForm: FormGroup;

  private formErrors = {
    "email": "",
    "password": "",
   };

  private validationMessages = {
      "email": {
          "required": "Обязательное поле.",
          "email": "Введен неправильный email",
      },
      "password": {
          "required": "Обязательное поле.",
          "minlength": "Значение должно быть не менее 5 символов.",
      },
  };

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.user = authService.user;
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
      this.authForm = this.fb.group({
          "email": [this.email, [
              Validators.required,
              Validators.email,
          ]],
          "password": [this.password, [
              Validators.required,
              Validators.minLength(5),
          ]],
      });

      this.authForm.valueChanges
          .subscribe(data => this.onValueChange(data));

      this.onValueChange();
  }

  onValueChange(data?: any) {
      if (!this.authForm) return;

      for (let field in this.formErrors) {
          this.formErrors[field] = "";

          const control = this.authForm.get(field);

          if (control && control.dirty && !control.valid) {
              let message = this.validationMessages[field];
              for (let key in control.errors) {
                  this.formErrors[field] += message[key] + " ";
              }
          }
      }
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

}
