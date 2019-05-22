import { Component } from '@angular/core';

import { Meal } from '@app/health/shared/services/meals.service';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['meal.component.scss'],
})
export class MealComponent {

  constructor() {}

  addMeal(event: Meal) {
    console.log('Meal:', event);
  }

}
