import {SkillItem} from './page/about/skills/skill';
import {UserAbout} from './page/about/about';
import {UserResume} from './page/resume/resume';
import {UserPortfolio} from './page/portfolio/portfolio';
import {ReposItem} from './page/portfolio/works-list/repo-item';
import {UserContacts} from './page/contacts/contacts';
import {Message} from './page/inbox/messages-list/message';

export class User {
    uid: number;
    login: string;
    name: string;
    avatar_url: string;
    about: UserAbout;
    resume: UserResume;
    portfolio: UserPortfolio;
    contacts: UserContacts;
    messages?: Message[];
    static addRepos(reposList: ReposItem[]) {
        return reposList.map(repoItem => {
            return new ReposItem(repoItem);
        });
    }
    constructor(uid, email, user) {
        this.uid = uid;
        this.login = user.login;
        this.name = user.name ? user.name : 'No Name';
        this.avatar_url = user.avatar_url;
        this.about = new UserAbout(user);
        this.resume = new UserResume(user);
        this.portfolio = new UserPortfolio(user);
        this.contacts = new UserContacts(email);
    }
    addSkills(skills: SkillItem[]) {
            skills.forEach(skillItem => {
                this.about.skills.push({
                    name: skillItem.name,
                    percentage: skillItem.percentage
                });
            });
    };
}

