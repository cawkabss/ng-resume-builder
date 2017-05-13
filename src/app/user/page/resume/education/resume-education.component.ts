import {Component, Input, OnInit} from '@angular/core';

import {UserService} from '../../../user.service';
import {ResumeService} from '../resume.service';

@Component({
  selector: 'app-resume-education',
  templateUrl: './resume-education.component.html',
  styleUrls: ['./resume-education.component.scss']
})
export class ResumeEducationComponent implements OnInit {
  @Input() resume;
  @Input() isEnabledEditMode;
  constructor(private us: UserService, private rs: ResumeService) {}
  onUserChange(isValid) {
    this.rs.isEducationValid.next(isValid);
    this.us.$isUserChange.next(true);
  }
  ngOnInit() {
  }

}
