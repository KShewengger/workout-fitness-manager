import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MealsComponent } from '@app/health/meals/container/meals.component';


export const ROUTES: Routes = [
  { path: '', component: MealsComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class MealsRoutingModule {}
