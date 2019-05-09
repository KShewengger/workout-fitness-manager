import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Store } from '@app/store';
import { AuthService } from '@app/auth/shared/services/auth.service';



export interface Meal {
  name: string;
  ingredients: string[];
  timestamp: number;
  $key: string;
  $exists: () => boolean;
}


@Injectable()
export class MealsService {

  meals$: Observable<any> = this.db
    .list(`meals/${this.uid}`)
    .valueChanges()
    .pipe(tap(next => this.store.set('meals', next)));

  constructor(private store: Store,
              private db: AngularFireDatabase,
              private authService: AuthService) {}

  get uid() {
    return this.authService.user.uid;
  }

}
