import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-schedule-calendar',
  styleUrls: ['schedule-calendar.component.scss'],
  templateUrl: './schedule-calendar.component.html'
})
export class ScheduleCalendarComponent {

  @Input()
  date: Date;

  constructor() {}
}
