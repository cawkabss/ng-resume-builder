import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AboutComponent} from './about.component';

const ROUTES = [
  {
    path: '',
    component: AboutComponent,
  }
];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: []
})
export class AboutRoutingModule { }
