import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './containers/register/register.component';

import { RegisterRoutingModule } from '@app/auth/register/register-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  declarations: [ RegisterComponent ]
})
export class RegisterModule {}
