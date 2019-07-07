import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { WorkoutsService, Workout } from '@app/health/shared/services/workouts.service';


@Component({
  selector: 'app-workouts',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit, OnDestroy {

  workout$: Observable<Workout>;
  subscription: Subscription;

  constructor(
    private workoutsService: WorkoutsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.workoutsService.workouts$.subscribe();
    this.workout$ = this.route.params
      .pipe(switchMap(param => this.workoutsService.getWorkout(param.id)));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async addWorkout(event: Workout) {
    await this.workoutsService.addWorkout(event);
    this.backToWorkouts();
  }

  async updateWorkout(event: Workout) {
    const key = this.route.snapshot.params.id;
    await this.workoutsService.updateWorkout(key, event);
    this.backToWorkouts();
  }

  async removeWorkout(event: Workout) {
    const key = this.route.snapshot.params.id;
    await this.workoutsService.removeWorkout(key);
    this.backToWorkouts();
  }

  backToWorkouts() {
    this.router.navigate(['workouts']);
  }

}
