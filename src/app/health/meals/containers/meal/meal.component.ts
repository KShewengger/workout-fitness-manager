import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Meal, MealsService } from '@app/health/shared/services/meals.service';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['meal.component.scss'],
})
export class MealComponent implements OnInit, OnDestroy {

  meal$: Observable<Meal>;
  subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private mealsService: MealsService) {}

  ngOnInit() {
    this.subscription = this.mealsService.meals$.subscribe();

    this.meal$ = this.route.params
      .pipe(switchMap(param => this.mealsService.getMeal(param.id)));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async addMeal(event: Meal) {
    await this.mealsService.addMeal(event);
    this.backToMeals();
  }

  backToMeals() {
    this.router.navigate(['meals']);
  }

}
