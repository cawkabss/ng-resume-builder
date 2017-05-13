import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MessageDetailComponent} from './messages-list/message-detail.component';
import {MessagesListComponent} from './messages-list/messages-list.component';
import {InboxComponent} from './inbox.component';

const routes = [
  {
    path: '',
    component: InboxComponent,
    children: [
      {
        path: '',
        component: MessagesListComponent
      },
      {
        path: ':id',
        component: MessageDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class InboxRoutingModule { }
