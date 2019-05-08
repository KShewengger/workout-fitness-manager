import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthModule } from '@app/auth/auth.module';
import { HealthModule } from '@app/health/health.module';

import { AppComponent } from '@app/root/container/app.component';
import { HeaderComponent } from '@app/root/components/header/header.component';
import { NavbarComponent } from '@app/root/components/navbar/navbar.component';

import { Store } from '@app/store';

import { AppRoutingModule } from '@app/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HealthModule
  ],
  providers: [
    Store
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
