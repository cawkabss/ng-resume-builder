import {Component, Input, OnInit} from '@angular/core';

import {ResumeService} from '../resume.service';
import {UserService} from '../../../user.service';

@Component({
  selector: 'app-resume-work-experiance',
  templateUrl: './resume-work-experience.component.html',
  styleUrls: ['./resume-work-experience.component.scss']
})
export class ResumeWorkExperienceComponent implements OnInit {
  @Input() resume;
  @Input() isEnabledEditMode;
  constructor(private us: UserService, private rs: ResumeService) {}
  onUserChange(isValid) {
    this.rs.isWorkExperianceValid.next(isValid);
    this.us.$isUserChange.next(true);
  }

  ngOnInit() {
  }

}
