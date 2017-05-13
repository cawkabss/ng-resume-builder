import {Component} from '@angular/core';

import {AuthService} from './auth.service';
import {UserService} from './user/user.service';
import {PageService} from './user/page/page.service';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    isPageLoad;

    constructor(private as: AuthService,
                private afAuth: AngularFireAuth,
                private ps: PageService,
                private us: UserService) {
        this.isPageLoad = this.ps.isPageLoad;
        this.afAuth.authState.subscribe(auth => {
            if (auth) {
                this.afAuth.auth.getRedirectResult()
                    .then(res => {
                        if (res.credential) {
                            this.us.checkUserFromDb(auth.uid)
                                .subscribe(user => {
                                    if (user) {
                                        this.as.$logInUser.next(user);
                                    } else {
                                        this.us.createNewUser(res.credential.accessToken, auth.uid, auth.email)
                                            .subscribe(newUser => {
                                                this.as.$logInUser.next(newUser);
                                            });
                                    }
                                });
                        } else {
                            this.us.getUserfromDB(auth.uid)
                                .subscribe(user => {
                                        this.as.$logInUser.next(user);
                                    }
                                );
                        }
                    });
            } else {
                this.as.$logInUser.next(null);
            }
        });
    }
}
