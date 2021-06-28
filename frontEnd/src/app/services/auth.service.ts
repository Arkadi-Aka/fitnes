import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenService} from './token.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = 'http://localhost:2021/auth/register';
  private loginUrl = 'http://localhost:2021/auth/login';

  constructor(private httpClient: HttpClient,
              private tokenService: TokenService,
              private router: Router) {
  }

  public register(data: any) {
    return this.httpClient.post(this.registerUrl,{
      email: data.email,
      name: data.first_name,
      lastName: data.last_name,
      username: data.first_name,
      password: data.password
    })
  }

  public login(data: any) {
    return this.httpClient.post(this.loginUrl,{
      username: data.first_name,
      password: data.password
    })
  }

  public logout() {
    this.tokenService.removeToken();
    this.router.navigateByUrl('/login');
  }
}
