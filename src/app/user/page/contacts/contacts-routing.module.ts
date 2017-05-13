import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ContactsComponent} from './contacts.component';

const ROUTES = [
  {
    path: '',
    component: ContactsComponent
  }
];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: []
})
export class ContactsRoutingModule { }
