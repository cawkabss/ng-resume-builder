import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {UiModule} from '../../shared/ui/ui.module';

import {AsideComponent} from './aside.component';
import {UploadFileModule} from '../../shared/upload-file/upload-file.module';

const SHARED = [
    AsideComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UploadFileModule,
        UiModule
    ],
    exports: SHARED,
    declarations: SHARED
})
export class AsideModule {
}
