import { Component, OnInit } from '@angular/core';

import {PageService} from '../page.service';
import {PortfolioService} from './portfolio.service';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  isEnabledEditMode;
  viewUser;
  constructor( private us: UserService,
               private ps: PageService,
               private portServ: PortfolioService) {
    this.us.$viewUser.subscribe(viewUser => this.viewUser = viewUser);
    this.us.$isEnabledEditMode.subscribe(isEnabledEditMode => this.isEnabledEditMode = isEnabledEditMode);

    this.us.$isUserChange.subscribe((isChange) => {
      if (isChange) {
        const isHeaderValid = this.portServ.isHeaderValid.getValue();
        const isWorksListValid = this.portServ.isWorksListValid.getValue();
        if (isHeaderValid && isWorksListValid) {
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
