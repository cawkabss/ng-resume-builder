import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {UserService} from '../user.service';

@Injectable()
export class PageService {
  isPageLoad = new BehaviorSubject(false);
  canEditPage = new BehaviorSubject(true);
  $canSavePage = new BehaviorSubject<boolean>(true);
  $canSaveAside = new BehaviorSubject<boolean>(true);
  constructor(private us: UserService) { }

  editPage(viewUser) {
    console.log(viewUser)
    this.us.$viewUserClone.next(this.us.cloneUser(viewUser)); // save initial user state
    this.us.$isEnabledEditMode.next(true);
  }

  cancelChanges() {
    this.us.$viewUserClone.subscribe(viewUser => {
      console.log(viewUser);
      this.us.$viewUser.next(this.us.cloneUser(viewUser)); // set initial state
      this.us.$isEnabledEditMode.next(false);
      this.us.$isUserChange.next(false);
    }).unsubscribe();
  }

  savePage() {
    this.us.$viewUser.subscribe(changeUser => {
      this.us.updateUser(changeUser.uid, changeUser);
      this.us.$viewUserClone.next(changeUser);
      this.us.$isUserChange.next(false);
      this.us.$isEnabledEditMode.next(false);
    }).unsubscribe();
  }
}
