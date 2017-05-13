import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {UiModule} from '../../../shared/ui/ui.module';

import {PageModule} from '../page.module';
import {TimelineModule} from './time-line/timeline.module';
import {ResumeRoutingModule} from './resume-routing.module';
import {ResumeComponent} from './resume.component';
import {ResumeHeaderComponent} from './header/resume-header.component';
import {ResumeWorkExperienceComponent} from './work-experience/resume-work-experience.component';
import {ResumeEducationComponent} from './education/resume-education.component';
import {ResumeService} from './resume.service';
import {UploadFileModule} from '../../../shared/upload-file/upload-file.module';

@NgModule({
    imports: [
        CommonModule,
        ResumeRoutingModule,
        UiModule,
        FormsModule,
        PageModule,
        UploadFileModule,
        TimelineModule
    ],
    declarations: [
        ResumeComponent,
        ResumeHeaderComponent,
        ResumeEducationComponent,
        ResumeWorkExperienceComponent
    ],
    providers: [ResumeService]
})
export class ResumeModule {
}
