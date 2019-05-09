import { NgModule } from '@angular/core';

import { HealthRoutingModule } from '@app/health/health-routing.module';
import { SharedModule } from '@app/health/shared/shared.module';


@NgModule({
  imports: [
    HealthRoutingModule,
    SharedModule.forRoot()
  ]
})
export class HealthModule {}
