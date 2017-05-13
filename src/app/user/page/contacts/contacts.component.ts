import {Component, OnDestroy, OnInit} from '@angular/core';

import {ContactService} from './contact.service';
import {PageService} from '../page.service';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {
  viewUser;
  isEnabledEditMode;
  constructor(private us: UserService, private ps: PageService, private cs: ContactService) {
    this.us.$viewUser.subscribe(viewUser => this.viewUser = viewUser);
    this.us.$isEnabledEditMode
        .subscribe(isEnabledEditMode => this.isEnabledEditMode = isEnabledEditMode);
    this.us.$isUserChange.subscribe((isChange) => {
      if (isChange) {
        const isHeaderValid = this.cs.isHeaderValid.getValue();
        if (isHeaderValid) {
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
  onUserChange(isValid) {
    this.cs.isHeaderValid.next(isValid);
    this.us.$isUserChange.next(true);
  }
}
