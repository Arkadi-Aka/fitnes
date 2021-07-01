import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = "Arkadi";
  programs: number = 3;
  workout: number = 10;
  calories: number = 6520;
  weight: number = 68;


  constructor() { }

  ngOnInit(): void {
  }

}
