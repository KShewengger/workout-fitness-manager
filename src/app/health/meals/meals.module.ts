import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MealsRoutingModule } from '@app/health/meals/meals-routing.module';
import { SharedModule } from '@app/health/shared/shared.module';

import { MealsComponent } from '@app/health/meals/container/meals.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MealsRoutingModule
  ],
  declarations: [
    MealsComponent
  ]
})
export class MealsModule {}
