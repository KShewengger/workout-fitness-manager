import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@app/store';

import { Observable, Subscription } from 'rxjs';

import { Workout, WorkoutsService } from '@app/health/shared/services/workouts.service';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit, OnDestroy {

  workouts$: Observable<Workout[]>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private workoutsService: WorkoutsService
  ) {}

  ngOnInit() {
    this.workouts$ = this.store.select<Workout[]>('workouts');
    this.subscription = this.workoutsService.workouts$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeWorkout(event: Workout) {
    this.workoutsService.removeWorkout(event.key);
  }

}
