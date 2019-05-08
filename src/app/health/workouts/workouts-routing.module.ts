import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkoutsComponent } from '@app/health/workouts/container/workouts.component';


export const ROUTES: Routes = [
  { path: '', component: WorkoutsComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class WorkoutsRoutingModule {}
