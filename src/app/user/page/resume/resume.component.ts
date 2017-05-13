import {Component, OnDestroy, OnInit} from '@angular/core';

import {UserService} from '../../user.service';
import {PageService} from '../page.service';
import {ResumeService} from './resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, OnDestroy {
  isEnabledEditMode;
  resume;
  constructor( private us: UserService, private ps: PageService, private rs: ResumeService) {
    this.us.$viewUser.subscribe(viewUser => this.resume = viewUser.resume);
    this.us.$isEnabledEditMode
        .subscribe(isEnabledEditMode => this.isEnabledEditMode = isEnabledEditMode);
    this.us.$isUserChange.subscribe((isChange) => {
      if (isChange) {
        const isHeaderValid = this.rs.isHeaderValid.getValue();
        const isEducationValid = this.rs.isEducationValid.getValue();
        const isWorkExperianceValid = this.rs.isWorkExperianceValid.getValue();
        if (isHeaderValid && isEducationValid && isWorkExperianceValid) {
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
