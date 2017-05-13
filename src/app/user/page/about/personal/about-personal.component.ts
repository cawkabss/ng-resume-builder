import {Component, Input, OnInit} from '@angular/core';

import {AboutService} from '../about.service';
import {UserService} from '../../../user.service';

@Component({
  selector: 'app-about-personal',
  templateUrl: './about-personal.component.html',
  styleUrls: ['./about-personal.component.scss']
})
export class AboutPersonalComponent implements OnInit {
  @Input() isEnabledEditMode;
  @Input() aboutUser;
  constructor(private us: UserService, private as: AboutService) {}
  ngOnInit() {}

  onUserChange(isValid) {
    this.as.isPersonalValid.next(isValid);
    this.us.$isUserChange.next(true);
  }
}
