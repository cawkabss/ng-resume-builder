import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {MaterialModule} from '@angular/material';
import 'firebase/storage';
import 'hammerjs';

import {AppComponent} from './app.component';
import {AuthService} from './auth.service';
import {PageService} from './user/page/page.service';
import {UserService} from './user/user.service';
import {UserNotFoundComponent} from './user-not-found/user-not-found.component';

const firebaseConfig = {
    apiKey: 'AIzaSyByEmlQk4MlQXsRukAnm0uEB-HW2v-Soic',
    authDomain: 'resume-buider.firebaseapp.com',
    databaseURL: 'https://resume-buider.firebaseio.com',
    projectId: 'resume-buider',
    storageBucket: 'resume-buider.appspot.com',
    messagingSenderId: '580766414562'
};


@NgModule({
    declarations: [
        AppComponent,
        UserNotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        MaterialModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDBBnjpHhXhJ2Gb3OlwHv9h9pwQ0bi0Il0'
        })
    ],
    providers: [
        AuthService,
        UserService,
        PageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
