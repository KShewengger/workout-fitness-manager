import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { ScheduleItem, ScheduleService } from '@app/health/shared/services/schedule.service';
import { Meal, MealsService } from '@app/health/shared/services/meals.service';
import { Workout, WorkoutsService } from '@app/health/shared/services/workouts.service';

import { Store } from '@app/store';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {

  open = false;

  date$: Observable<Date>;
  selected$: Observable<any>;
  list$: Observable<Meal[] | Workout[]>;
  subscriptions: Subscription[] = [];
  schedule$: Observable<ScheduleItem[]>;

  constructor(
    private store: Store,
    private scheduleService: ScheduleService,
    private mealsService: MealsService,
    private workoutsService: WorkoutsService,
  ) {}

  ngOnInit() {
    this.date$ = this.store.select('date');
    this.schedule$ = this.store.select('schedule');
    this.selected$ = this.store.select('selected');
    this.list$ = this.store.select('list');

    this.subscriptions = [
      this.scheduleService.schedule$.subscribe(),
      this.scheduleService.selected$.subscribe(),
      this.scheduleService.list$.subscribe(),
      this.scheduleService.items$.subscribe(),
      this.mealsService.meals$.subscribe(),
      this.workoutsService.workouts$.subscribe(),
    ];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  changeDate(date: Date) {
    this.scheduleService.updateDate(date);
  }

  changeSection(event: any) {
    this.open = true;
    this.scheduleService.selectSection(event);
  }

  assignItem(items: string[]) {
    this.scheduleService.updateItems(items);
    this.closeAssign();
  }

  closeAssign() {
    this.open = false;
  }

}
