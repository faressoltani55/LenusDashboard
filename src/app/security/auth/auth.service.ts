import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {TokenStorageService} from '../token/token-storage.service';
import {map} from 'rxjs/operators';
import {LoginResponse} from '../../data/LoginResponse';

const AUTH_API = 'https://volunteer-80c3f.appspot.com/hotel/login';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export class LoginRequest {
  email: string;
  password: string
  constructor(email,password) {
    this.email = email;
    this.password = password;
  }
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<LoginResponse>;
  public currentUser: Observable<LoginResponse>;

  constructor(private http: HttpClient, private router: Router, private tokenService : TokenStorageService) {
    this.currentUserSubject = new BehaviorSubject<LoginResponse>(JSON.parse(localStorage.getItem('auth_token')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username : string, password : string) : Observable<any> {

    return this.http.post(AUTH_API, new LoginRequest(username,password), httpOptions).pipe(map (
      (userData: any) => {
        console.log(userData);
        if (userData) {
          this.tokenService.saveToken('Bearer '+ userData.token);
          this.tokenService.saveUser(userData);
          this.currentUserSubject.next(userData);
        }
        return userData;
      }
    ));
  }


  isUserLoggedIn() {
    let user = this.tokenService.getUser();
    return (user !== null)
  }


  logout() {
    this.tokenService.signOut();
    this.currentUserSubject.next(null);

  }
}
