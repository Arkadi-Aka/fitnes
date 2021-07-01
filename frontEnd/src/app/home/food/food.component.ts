import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {FoodService} from "../../services/food.service";


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foods = [{food: "apple", calories: 320},{food: "arange", calories: 500}];

  constructor(private foodService: FoodService) { }
  public onSubmit(form: NgForm){
    this.foodService.addFood(form.value).subscribe((data:any) => {
      console.log(data)
    })
  }
  ngOnInit(): void {
  }

}
