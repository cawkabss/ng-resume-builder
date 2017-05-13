import * as lorem from 'lorem-ipsum';

export class ReposItem {
    id: number;
    name: string;
    url: string;
    image: string;
    language: string;
    desc: string;
    stars: number;
    hide = false;
    constructor(repo) {
        this.id = repo.id;
        this.name = repo.name;
        this.url = repo.html_url;
        this.image = 'https://firebasestorage.googleapis.com/v0/b/resume-buider.appspot.com/o/shared%2Fgithub-mark.png?alt=media&token=cf10e175-e276-482b-9764-a31cda97692f';
        this.language = repo.language ? repo.language : 'language';
        this.desc = repo.desc ? repo.desc : lorem({
            count: 1
        });
        this.stars = repo.stargazers_count;
    }
}
