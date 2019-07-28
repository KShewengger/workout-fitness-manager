import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularFireDatabaseModule } from '@angular/fire/database';

import { ListItemComponent } from '@app/health/shared/components/list-item/list-item.component';

import { JoinPipe } from '@app/health/shared/pipes/join.pipe';
import { WorkoutPipe } from '@app/health/shared/pipes/workout.pipe';

import { MealsService } from '@app/health/shared/services/meals.service';
import { WorkoutsService } from '@app/health/shared/services/workouts.service';
import { ScheduleService } from '@app/health/shared/services/schedule.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    ListItemComponent,
    JoinPipe,
    WorkoutPipe
  ],
  exports: [
    ListItemComponent,
    JoinPipe,
    WorkoutPipe
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        MealsService,
        WorkoutsService,
        ScheduleService
      ]
    };
  }

}
