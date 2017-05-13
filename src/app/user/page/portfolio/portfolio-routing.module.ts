import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PortfolioComponent} from './portfolio.component';

const ROUTES = [
  {
    path: '',
    component: PortfolioComponent
  }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(ROUTES)],
  declarations: []
})
export class PortfolioRoutingModule { }
