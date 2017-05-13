import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../auth.service';
import {PageService} from '../user/page/page.service';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loginUser;
  constructor(private as: AuthService,
              private ps: PageService,
              private afAuth: AngularFireAuth,
              private router: Router) {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.as.$logInUser.subscribe(loginUser => {
          if (loginUser) {
            this.loginUser = loginUser;
            this.ps.isPageLoad.next(true);
          }
        });

      } else {
        this.ps.isPageLoad.next(true);
      }
    });
  }
  signIn() {
    this.as.login();
  }
  toUserProfile() {
    this.router.navigate([this.loginUser.login]);
  }
  ngOnInit() {
  }
}
