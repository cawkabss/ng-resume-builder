import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UiModule} from '../../../../shared/ui/ui.module';

import {TimelineListComponent} from './timeline-list.component';
import {TimelineItemComponent} from './timeline-item.component';
import {TimelineFormComponent} from './timeline-form.component';
import {FormsModule} from '@angular/forms';

const SHARED = [
    TimelineListComponent,
    TimelineItemComponent,
    TimelineFormComponent
];
@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      UiModule
  ],
  exports: SHARED,
  declarations: SHARED
})
export class TimelineModule { }
