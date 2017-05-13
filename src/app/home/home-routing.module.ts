import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

const ROUTES = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: []
})
export class HomeRoutingModule { }
