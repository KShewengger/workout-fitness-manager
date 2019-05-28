import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Meal, MealsService } from '@app/health/shared/services/meals.service';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['meal.component.scss'],
})
export class MealComponent {

  constructor(private router: Router,
              private mealsService: MealsService) {}

  async addMeal(event: Meal) {
    await this.mealsService.addMeal(event);
    this.backToMeals();
  }

  backToMeals() {
    this.router.navigate(['meals']);
  }

}
