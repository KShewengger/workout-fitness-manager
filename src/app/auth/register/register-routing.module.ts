import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './containers/register/register.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ]
})
export class RegisterRoutingModule {}

