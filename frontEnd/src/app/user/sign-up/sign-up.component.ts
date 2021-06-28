import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../../services/auth.service';


@Injectable()
export class ConfigService {
  constructor() { }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }
  public onSubmit(form: NgForm){
    this.authService.register(form.value).subscribe((data:any) => {
      console.log(data)
    })
  }
  ngOnInit(): void {
  }

}
