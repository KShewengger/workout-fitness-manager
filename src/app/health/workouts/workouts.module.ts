import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { WorkoutsComponent } from '@app/health/workouts/containers/workouts/workouts.component';
import { WorkoutComponent } from '@app/health/workouts/containers/workout/workout.component';
import { WorkoutTypeComponent } from '@app/health/workouts/components/workout-type/workout-type.component';

import { WorkoutsRoutingModule } from '@app/health/workouts/workouts-routing.module';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WorkoutsRoutingModule,
    SharedModule
  ],
  declarations: [
    WorkoutsComponent,
    WorkoutComponent,
    WorkoutFormComponent,
    WorkoutTypeComponent
  ]
})
export class WorkoutsModule {}
