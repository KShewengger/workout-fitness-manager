import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/auth/shared/shared.module';

import { RegisterComponent } from './container/register.component';

import { RegisterRoutingModule } from '@app/auth/register/register-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ],
  declarations: [ RegisterComponent ]
})
export class RegisterModule {}
