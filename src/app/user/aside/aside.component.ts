import {Component, OnInit} from '@angular/core';

import {PageService} from '../page/page.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss', './aside.component.media.scss'],
})
export class AsideComponent implements OnInit {
  viewUser;
  $isEnabledEditMode;
  progress;
  constructor(private us: UserService, private ps: PageService) {
      this.us.$viewUser.subscribe(viewUser => this.viewUser = viewUser);
      this.$isEnabledEditMode = this.us.$isEnabledEditMode;
  }
  onUserChange(isValid) {
    this.ps.$canSaveAside.next(isValid);
    this.us.$isUserChange.next(true);
  }
  getDownloadUrl(url) {
    this.viewUser.avatar_url = url;

  }
  getProgress(progress) {
    this.progress = progress;
  }
  ngOnInit() {
  }

}
