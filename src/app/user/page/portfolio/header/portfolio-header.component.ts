import {Component, Input, OnInit} from '@angular/core';

import {PortfolioService} from '../portfolio.service';
import {UserService} from '../../../user.service';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.scss']
})
export class PortfolioHeaderComponent implements OnInit {
  @Input() isEnabledEditMode;
  @Input() portfolio;
  constructor(private us: UserService, private ps: PortfolioService) { }
  onUserChange(isValid) {
    this.ps.isHeaderValid.next(isValid);
    this.us.$isUserChange.next(true);
  }
  ngOnInit() {
  }

}
