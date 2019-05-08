import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './container/login.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule {}

