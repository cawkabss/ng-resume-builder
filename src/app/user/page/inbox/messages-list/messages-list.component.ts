import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {AngularFireDatabase} from 'angularfire2/database';

import {UserService} from '../../../user.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {
  messagesList;
  constructor(private db: AngularFireDatabase,
              private router: Router,
              private ar: ActivatedRoute,
              private us: UserService) { }

  ngOnInit() {
    this.us.$viewUser.subscribe(viewUser => {
      this.messagesList = this.db.list(`users/${viewUser.uid}/messages`)
          .map(messages => messages.reverse());
    });
  }
  showDetail(message) {
    this.router.navigate([message.$key], {relativeTo: this.ar});
    message.showed = true;
    this.us.$viewUser.subscribe(viewUser => {
      this.db.object(`users/${viewUser.uid}/messages/${message.$key}`)
          .update(message);
    });
  }
}
