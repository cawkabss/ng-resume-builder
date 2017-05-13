import {Component, Input, OnInit} from '@angular/core';

import {AboutService} from '../about.service';
import {UserService} from '../../../user.service';

@Component({
  selector: 'app-about-header',
  templateUrl: './about-header.component.html',
  styleUrls: ['./about-header.component.scss']
})
export class AboutHeaderComponent implements OnInit {
  @Input() isEnabledEditMode;
  @Input() aboutUser;
  constructor(private us: UserService, private as: AboutService) {}
  ngOnInit() {}

  onUserChange(isValid) {
    this.as.isHeaderValid.next(isValid);
    this.us.$isUserChange.next(true);
  }
}
