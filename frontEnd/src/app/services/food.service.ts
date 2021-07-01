import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenService} from './token.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private addFoodUrl = 'http://localhost:2021/addFood';
  constructor(private httpClient: HttpClient) {
  }

  public addFood(data: any) {
    return this.httpClient.post(this.addFoodUrl,{
      food: data.food,
      calories: data.calories
    })
  }
}
