import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { User } from '@app/auth/shared/services/auth.service';


@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
})
export class HeaderComponent {

  @Input()
  user: User;

  @Output()
  logout = new EventEmitter<any>();

  constructor() {}

  logoutUser() {
    this.logout.emit();
  }

}
