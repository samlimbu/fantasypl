import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppConfigService } from './AppConfig.service';
const helper = new JwtHelperService();
@Injectable({ providedIn: 'root' })
export class AuthService {
  authToken: any;
  user: any;
  constructor(
    private http: HttpClient,
    private appConfigService: AppConfigService
    ){
    }


  getTestData() {
    return this.http.get(`${this.appConfigService.config['api_url']}/category`)
      .pipe(map(data => {
        console.log(data)
      }));
  }
  registerUser(user) {
   
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.appConfigService.config['api_url']}/users/register`, user)
      .pipe(map(data => { return data }));
  }
  authenticateUser(user) {
    console.log(this.appConfigService.config['api_url']);
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.appConfigService.config['api_url']}/users/authenticate`, user)
      .pipe(map(data => { return data }));
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.appConfigService.config['api_url']}/users/profile`)
      .pipe(map(data => { return data }));
  }

  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;

  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  loggedIn() {
    // console.log(tokenNotExpired('id_token'))
    // return tokenNotExpired('token');
  }
  isTokenExpired(): boolean {
    if (localStorage.getItem('token')) {
      return (helper.isTokenExpired(localStorage.getItem('token')));
      // return false;
      //isTokenExpired = this.helper.isTokenExpired();
    } else {
      return true;
    }
  }
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
