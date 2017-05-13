import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UiModule} from '../ui/ui.module';

import {UploadFileComponent} from './upload-file.component';

const SHARED = [
    UploadFileComponent
];

@NgModule({
    imports: [
        CommonModule,
        UiModule
    ],
    declarations: SHARED,
    exports: SHARED
})
export class UploadFileModule {
}
