import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthFormComponent } from '@app/auth/shared/containers/auth-form/auth-form.component';

import { AuthService } from '@app/auth/shared/services/auth.service';
import { AuthGuard } from '@app/auth/shared/guards/auth.guard';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ AuthFormComponent ],
  exports: [ AuthFormComponent ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
        AuthGuard
      ]
    };
  }

}
