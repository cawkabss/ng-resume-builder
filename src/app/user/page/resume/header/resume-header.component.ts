import {Component, Input, OnInit} from '@angular/core';

import {UserService} from '../../../user.service';
import {ResumeService} from '../resume.service';

@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.scss']
})
export class ResumeHeaderComponent implements OnInit {
  @Input() isEnabledEditMode;
  @Input() resume;
  progress;
  constructor(private us: UserService,
              private rs: ResumeService) {}
  onUserChange(isValid) {
    this.rs.isHeaderValid.next(isValid);
    this.us.$isUserChange.next(true);
  }
  getDownloadUrl(url) {
    this.resume.pdfResumeUrl = url;
  }
  getProgress(progress) {
    this.progress = progress;
  }
  ngOnInit() {
    this.us.$isEnabledEditMode.subscribe(isEnabledEditMode => {
      if (!isEnabledEditMode) {
        this.progress = 0;
      }
    });
  }

}
