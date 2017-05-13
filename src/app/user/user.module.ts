import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UiModule} from '../shared/ui/ui.module';

import {AsideModule} from './aside/aside.module';
import {NavigationComponent} from '../navigation/navigation.component';
import {MessagesResolve} from './page/inbox/messages-resolve';
import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {UserResolve} from './user-resolve';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        AsideModule,
        UiModule
    ],
    declarations: [
        UserComponent,
        NavigationComponent,
    ],
    providers: [UserResolve, MessagesResolve],
})
export class UserModule {
}
