import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UiModule} from '../../shared/ui/ui.module';

import {PageBlockDirective} from './page-block.directive';
import {PageBlockTitleDirective} from './page-block-title.directive';
import {PageComponent} from './page.component';

const SHARED = [
    PageBlockDirective,
    PageBlockTitleDirective,
    PageComponent,
];

@NgModule({
    exports: SHARED,
    imports: [CommonModule, UiModule],
    declarations: SHARED,
    providers: []
})
export class PageModule {
}
