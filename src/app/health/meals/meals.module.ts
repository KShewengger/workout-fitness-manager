import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MealsRoutingModule } from '@app/health/meals/meals-routing.module';
import { SharedModule } from '@app/health/shared/shared.module';

import { MealsComponent } from '@app/health/meals/containers/meals/meals.component';
import { MealComponent } from '@app/health/meals/containers/meal/meal.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MealsRoutingModule
  ],
  declarations: [
    MealsComponent,
    MealComponent
  ]
})
export class MealsModule {}
