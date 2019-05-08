import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WorkoutsRoutingModule } from '@app/health/workouts/workouts-routing.module';

import { WorkoutsComponent } from '@app/health/workouts/container/workouts.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WorkoutsRoutingModule
  ],
  declarations: [
    WorkoutsComponent
  ]
})
export class WorkoutsModule {}
