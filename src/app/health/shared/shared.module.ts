import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularFireDatabaseModule } from '@angular/fire/database';

import { ListItemComponent } from '@app/health/shared/components/list-item/list-item.component';

import { MealsService } from '@app/health/shared/services/meals.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireDatabaseModule
  ],
  declarations: [ ListItemComponent ],
  exports: [ ListItemComponent ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        MealsService
      ]
    };
  }

}
