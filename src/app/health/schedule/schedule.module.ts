import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ScheduleRoutingModule } from '@app/health/schedule/schedule-routing.module';

import { ScheduleComponent } from '@app/health/schedule/container/schedule.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScheduleRoutingModule
  ],
  declarations: [
    ScheduleComponent
  ]
})
export class ScheduleModule {}
