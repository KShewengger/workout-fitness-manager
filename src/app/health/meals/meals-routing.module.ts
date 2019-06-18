import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MealsComponent } from '@app/health/meals/containers/meals/meals.component';
import { MealComponent } from '@app/health/meals/containers/meal/meal.component';


export const ROUTES: Routes = [
  { path: '', component: MealsComponent },
  { path: 'new', component: MealComponent },
  { path: ':id', component: MealComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class MealsRoutingModule {}
