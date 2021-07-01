import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';



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

  constructor(private authService: AuthService,
              private router: Router) { }
  public onSubmit(form: NgForm){
    this.authService.register(form.value).subscribe((data:any) => {
      this.router.navigate(['login']);
    })
  }
  ngOnInit(): void {
  }

}
