import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MealsRoutingModule } from '@app/health/meals/meals-routing.module';

import { MealsComponent } from '@app/health/meals/container/meals.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MealsRoutingModule
  ],
  declarations: [
    MealsComponent
  ]
})
export class MealsModule {}
