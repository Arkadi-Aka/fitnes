import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from "../../services/auth.service";
import {TokenService} from "../../services/token.service";


@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService,
              private tokenService: TokenService) { }
  public onSubmit(form: NgForm){
    this.authService.login(form.value).subscribe((data:any) => {
      this.tokenService.saveToken(data.token)
    })
    }
  ngOnInit(): void {
  }

}
