import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedule-days',
  styleUrls: ['schedule-days.component.scss'],
  templateUrl: './schedule-days.component.html'
})
export class ScheduleDaysComponent {

  days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  @Input()
  selected: number;

  @Output()
  select = new EventEmitter<number>();

  selectDay(index: number) {
    this.select.emit(index);
  }

}
