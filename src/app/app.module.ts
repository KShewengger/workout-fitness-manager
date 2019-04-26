import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthModule } from '@app/auth/auth.module';

import { AppComponent } from '@app/containers/app/app.component';

import { AppRoutingModule } from '@app/app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
