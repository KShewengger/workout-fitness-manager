import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from '@app/auth/auth-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
