import {Component, OnDestroy, OnInit} from '@angular/core';

import {AboutService} from './about.service';
import {PageService} from '../page.service';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  isEnabledEditMode;
  $viewUser;

  constructor( private us: UserService,
               private as: AboutService,
               private ps: PageService) {
    this.$viewUser = this.us.$viewUser;
    this.us.$isEnabledEditMode
        .subscribe(isEnabledEditMode => this.isEnabledEditMode = isEnabledEditMode);

    this.us.$isUserChange.subscribe((isChange) => {
      if (isChange) {
        const isHeaderValid = this.as.isHeaderValid.getValue();
        const isPersonalValid = this.as.isPersonalValid.getValue();
        const isSkillsValid = this.as.isSkillsValid.getValue();
        if (isHeaderValid && isPersonalValid && isSkillsValid) {
          this.ps.$canSavePage.next(true);
        } else {
          this.ps.$canSavePage.next(false);
        }
      }
    });
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    if (this.isEnabledEditMode) {
      this.ps.cancelChanges();
    }
  }
}
