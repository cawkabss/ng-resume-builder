import { NgModule } from '@angular/core';
import {
  MaterialModule,
  MdButtonModule,
  MdIconModule,
  MdInputModule, MdListModule,
  MdProgressBarModule,
  MdSelectModule,
  MdSliderModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';

const UI = [
    MdButtonModule,
  MdToolbarModule,
  MdIconModule,
  MdSliderModule,
  MdInputModule,
  MdTooltipModule,
  MdProgressBarModule,
  MdSelectModule,
  MdListModule
];

@NgModule({
  imports: [UI, MaterialModule],
  exports: [UI, MaterialModule],
  declarations: []
})
export class UiModule { }
