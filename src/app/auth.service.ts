import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
    $logInUser = new BehaviorSubject(null);
  constructor(private afAuth: AngularFireAuth) {}
  login() {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('user');
    this.afAuth.auth.signInWithRedirect(provider);
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
