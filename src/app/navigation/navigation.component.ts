import {Component, HostBinding, HostListener, Inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

import {AngularFireDatabase} from 'angularfire2/database';

import {AuthService} from '../auth.service';
import {tabs} from './tabs';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss', './navigation.component.media.scss'],
})
export class NavigationComponent implements OnInit {
  tabs = tabs;
  isLogin;
  isHasNewMessages;
  isAdmin;
  @HostBinding('class.scroll') isScroll = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scroll = this.document.body.scrollTop;
    if (scroll > 50) {
      this.isScroll = true;
    } else if (this.isScroll && scroll < 10) {
      this.isScroll = false;
    }
  }
  constructor(private as: AuthService,
              private us: UserService,
              private db: AngularFireDatabase,
              private router: Router,
              private ar: ActivatedRoute,
              @Inject(DOCUMENT) private document: any) {}
  ngOnInit() {
    this.us.$viewUser.subscribe(viewUser => {
        this.db.list(`users/${viewUser.uid}/messages`, {
          query: {
            orderByChild: 'showed',
            equalTo: false
          }}).subscribe(isHasNewMessages => this.isHasNewMessages = !!isHasNewMessages.length);
    });
    this.as.$logInUser.subscribe(loginUser => this.isLogin = loginUser);
    this.us.$canEditUser.subscribe(isAdmin => this.isAdmin = isAdmin);
  }
  showMessages() {
    this.router.navigate(['messages'], {relativeTo: this.ar});
  }
  login() {
    this.as.login();
  }

  logout() {
    this.as.logout();
  }
  navigateToProfile() {
    this.router.navigate(['./' + this.isLogin.login]);
  }

}
