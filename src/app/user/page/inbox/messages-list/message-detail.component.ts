import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {AngularFireDatabase} from 'angularfire2/database';
import {UserService} from '../../../user.service';


@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {
  message;
  constructor(private ar: ActivatedRoute,
              private db: AngularFireDatabase,
              private us: UserService,
              private location: Location) {}

  ngOnInit() {
    this.us.$viewUser.subscribe(viewUser => {
      this.db.object(`users/${viewUser.uid}/messages/${this.ar.snapshot.params['id']}`)
          .subscribe(message => this.message = message);
    });
  }
  back() {
    this.location.back();
  }
  deleteMessage() {
    this.us.$viewUser.subscribe(viewUser => {
      this.db.list(`users/${viewUser.uid}/messages/`).remove(this.ar.snapshot.params['id']);
      this.back();
    }).unsubscribe();
  }
}
