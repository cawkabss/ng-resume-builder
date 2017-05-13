import {Component, OnDestroy, OnInit} from '@angular/core';

import {PageService} from '../page.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit, OnDestroy {

  constructor(private ps: PageService) {}

  ngOnInit() {
    this.ps.canEditPage.next(false);
  }
  ngOnDestroy() {
    this.ps.canEditPage.next(true);
  }
}
