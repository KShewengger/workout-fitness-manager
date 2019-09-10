import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ScheduleComponent } from '@app/health/schedule/container/schedule.component';

import { ScheduleCalendarComponent } from '@app/health/schedule/components/schedule-calendar/schedule-calendar.component';
import { ScheduleDaysComponent } from '@app/health/schedule/components/schedule-days/schedule-days.component';
import { ScheduleControlsComponent } from '@app/health/schedule/components/schedule-controls/schedule-controls.component';
import { ScheduleSectionComponent } from '@app/health/schedule/components/schedule-section/schedule-section.component';
import { ScheduleAssignComponent } from '@app/health/schedule/components/schedule-assign/schedule-assign.component';

import { ScheduleRoutingModule } from '@app/health/schedule/schedule-routing.module';
import { SharedModule } from '@app/health/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    ScheduleRoutingModule
  ],
  declarations: [
    ScheduleComponent,
    ScheduleCalendarComponent,
    ScheduleDaysComponent,
    ScheduleControlsComponent,
    ScheduleSectionComponent,
    ScheduleAssignComponent
  ]
})
export class ScheduleModule {}
