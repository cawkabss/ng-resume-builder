import * as lorem from 'lorem-ipsum';
import {ReposItem} from './works-list/repo-item';

export class UserPortfolio {
    desc: string;
    reposUrl: string;
    reposList: ReposItem[] = [];
    constructor(user) {
        this.desc = lorem({
            count: 10
        });
        this.reposUrl = user.repos_url;
    }
}
