import * as lorem from 'lorem-ipsum';
import {SkillItem} from './skills/skill';

export class UserAbout {
    whoIam: string;
    aboutMe: string;
    languages: string;
    birthDay: string;
    location: string;
    relationship: string;
    skills: SkillItem[] = [];
    constructor(user) {
        this.whoIam = 'I`m ...';
        this.aboutMe = user.bio ? user.bio : lorem({
            count: 10
        });
        this.languages = 'Languages';
        this.birthDay = this.formatDateToyyyymmdd(new Date());
        this.location = user.location ? user.location : 'Your location';
        this.relationship = 'Relationship';
    }
    formatDateToyyyymmdd(date) {
        const mm = date.getMonth() + 1; // getMonth() is zero-based
        const dd = date.getDate();

        return [date.getFullYear(),
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
        ].join('-');
    }
}
