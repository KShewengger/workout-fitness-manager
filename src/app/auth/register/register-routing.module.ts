import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './container/register.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class RegisterRoutingModule {}

