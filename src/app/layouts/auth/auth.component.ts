import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../security/auth/auth.service";
import {TokenStorageService} from "../../security/token/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  response : any;
  email = '';
  password = '';
  isLoggedIn = false;
  isLoginFailed = false;
  error = false;
  emailEmpty = false;
  passwordEmpty = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.router.navigateByUrl('/dashboard ');
    }
  }

  onSubmit() {
    if(this.email === "") {
      this.emailEmpty = true;
      this.isLoginFailed = false;
    }
    else if (!/^[a-z0-9.]+@[a-z]+.[a-z]{2,4}$/.test(this.email)) {
      this.emailEmpty = false;
      this.isLoginFailed = true;
    }
    else {
      this.emailEmpty = false;
      this.isLoginFailed = false;
    }
    this.passwordEmpty = this.password === "";
    this.authService.login(this.email,this.password).subscribe(
      data => {
        this.response = data;
        console.log(this.response);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log("clicked");
        this.router.navigateByUrl('/dashboard');
      },
      error => {
        if(!this.emailEmpty && !this.isLoginFailed && !this.passwordEmpty) {
          this.error = true;
        }
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
