import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UiModule} from '../../../shared/ui/ui.module';

import {MessagesListComponent} from './messages-list/messages-list.component';
import {MessageDetailComponent} from './messages-list/message-detail.component';
import {InboxComponent} from './inbox.component';
import {PageModule} from '../page.module';
import {InboxRoutingModule} from './inbox-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PageModule,
        InboxRoutingModule,
        UiModule
    ],
    declarations: [MessagesListComponent, MessageDetailComponent, InboxComponent]
})
export class InboxModule {
}
