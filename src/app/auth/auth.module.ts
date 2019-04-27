import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { SharedModule } from '@app/auth/shared/shared.module';

import { AuthRoutingModule } from '@app/auth/auth-routing.module';

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyAZ6aLfbmCkE23axeYQDbszHfb1c88ZS6Q',
  authDomain: 'workout-fitness-manager-app.firebaseapp.com',
  databaseURL: 'https://workout-fitness-manager-app.firebaseio.com',
  projectId: 'workout-fitness-manager-app',
  storageBucket: 'workout-fitness-manager-app.appspot.com',
  messagingSenderId: '1004077926493'
};

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}
