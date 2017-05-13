import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {UiModule} from '../../../shared/ui/ui.module';

import {AboutComponent} from './about.component';
import {AboutRoutingModule} from './about-routing.module';
import {AboutHeaderComponent} from './header/about-header.component';
import {AboutService} from './about.service';
import {AboutSkillsComponent} from './skills/about-skills.component';
import {AboutPersonalComponent} from './personal/about-personal.component';
import {PageModule} from '../page.module';
import {SkillsFormComponent} from './skills/skills-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AboutRoutingModule,
        PageModule,
        UiModule
    ],
    declarations: [
        AboutComponent,
        AboutHeaderComponent,
        AboutPersonalComponent,
        AboutSkillsComponent,
        SkillsFormComponent
    ],
    providers: [AboutService]
})
export class AboutModule {
}
