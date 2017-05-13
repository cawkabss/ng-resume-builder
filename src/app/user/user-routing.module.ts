import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {UserComponent} from './user.component';
import {UserResolve} from "./user-resolve";
import {MessagesResolve} from "./page/inbox/messages-resolve";
const ROUTES = [
  {
    path: '',
    component: UserComponent,
    resolve: {
      viewUser: UserResolve
    },
    children: [
      {
        path: '',
        loadChildren: 'app/user/page/about/about.module#AboutModule'
      },
      {
        path: 'resume',
        loadChildren: 'app/user/page/resume/resume.module#ResumeModule'
      },
      {
        path: 'portfolio',
        loadChildren: 'app/user/page/portfolio/portfolio.module#PortfolioModule'
      },
      {
        path: 'contacts',
        loadChildren: 'app/user/page/contacts/contacts.module#ContactsModule'
      },
      {
        path: 'messages',
        loadChildren: 'app/user/page/inbox/inbox.module#InboxModule',
        resolve: {
          messages: MessagesResolve
        },
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(ROUTES)],
  declarations: []
})
export class UserRoutingModule { }
