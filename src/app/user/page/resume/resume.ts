import * as lorem from 'lorem-ipsum';
import {TimeLineBox} from './time-line/timeline-box';

export class UserResume {
    resumeDesc: string;
    pdfResumeUrl?: string;
    educationList: TimeLineBox[];
    workExperience: TimeLineBox[];
    constructor(user) {
        this.resumeDesc = lorem({
            count: 10
        });
        this.educationList = [ new TimeLineBox('Your institution') ];
        this.workExperience = [ new TimeLineBox(user.company) ];
    }
}
