import {Component, Input, OnInit} from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';

import {Message} from '../../inbox/messages-list/message';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() userUid;
  name;
  email;
  subject;
  subjects = ['job', 'testimonial', 'other'];
  message;
  showForm: boolean = true;
  constructor(private db: AngularFireDatabase) { }
  addMessage(msg) {
    this.db.list(`users/${this.userUid}/messages`).push(new Message(msg));
    this.showForm = false;
    setTimeout(() => {
      this.showForm = true;
    });
  }
  ngOnInit() {}

}
