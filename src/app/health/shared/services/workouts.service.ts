import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable, of } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

import { Store } from '@app/store';
import { AuthService } from '@app/auth/shared/services/auth.service';



export interface Workout {
  name: string;
  type: string;
  strength: any;
  endurance: any;
  timestamp: number;
  key: string;
  $exists: () => boolean;
}


@Injectable()
export class WorkoutsService {

  workouts$: Observable<any> = this.db
    .list(`workouts/${this.uid}`)
    .snapshotChanges()
    .pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))),
      tap(next => this.store.set('workouts', next))
    );

  constructor(private store: Store,
              private db: AngularFireDatabase,
              private authService: AuthService) {}

  get uid() {
    return this.authService.user.uid;
  }

  getWorkout(key: string) {
    if (!key) return of({});

    return this.store.select<Workout[]>('workouts')
      .pipe(
        filter(Boolean),
        map(workouts => workouts.find((Workout: Workout) => Workout.key === key))
      );
  }

  addWorkout(Workout: Workout) {
    return this.db.list(`workouts/${this.uid}`).push(Workout);
  }

  updateWorkout(key: string, Workout: Workout) {
    return this.db.object(`workouts/${this.uid}/${key}`).update(Workout);
  }

  removeWorkout(key: string) {
    return this.db.list(`workouts/${this.uid}`).remove(key);
  }

}
