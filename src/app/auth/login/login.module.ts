import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/auth/shared/shared.module';

import { LoginComponent } from './containers/login/login.component';

import { LoginRoutingModule } from '@app/auth/login/login-routing.module';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule {}
