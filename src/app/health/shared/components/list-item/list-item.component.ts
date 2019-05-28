import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['list-item.component.scss'],
  templateUrl: './list-item.component.html'
})
export class ListItemComponent {

  @Input()
  item: any;

  constructor() {}

}
