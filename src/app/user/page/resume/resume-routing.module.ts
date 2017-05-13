import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ResumeComponent} from './resume.component';

const ROUTES = [
  {
    path: '',
    component: ResumeComponent
  }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(ROUTES)],
  declarations: []
})
export class ResumeRoutingModule { }
