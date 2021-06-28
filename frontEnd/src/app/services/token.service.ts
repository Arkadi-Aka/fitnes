import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.setItem('token', token);
  }

  public getToken() {
    return window.sessionStorage.getItem('token');
  }

  public removeToken() {
    window.sessionStorage.removeItem('token');
  }
}
