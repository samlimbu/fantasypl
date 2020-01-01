import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {
  // url = 'http://localhost:3000/'; //for testing
  url = 'https://authnode1.herokuapp.com/';
  authToken: any;
  user: any;
  constructor(private http: HttpClient) { }

  getTestData() {
    return this.http.get(this.url + 'category')
      .pipe(map(data => {
        console.log(data)
      }));
  }
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + 'users/register', user)
      .pipe(map(data => { return data }));
  }
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + 'users/authenticate', user)
      .pipe(map(data => { return data }));
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + 'users/profile')
      .pipe(map(data => { return data }));
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
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
    //return tokenNotExpired('id_token');
    return true;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
