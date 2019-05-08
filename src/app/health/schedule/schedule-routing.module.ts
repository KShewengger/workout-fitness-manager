import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleComponent } from '@app/health/schedule/container/schedule.component';


export const ROUTES: Routes = [
  { path: '', component: ScheduleComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class ScheduleRoutingModule {}
