import {Component, Input, OnChanges, OnInit} from '@angular/core';

import {PortfolioService} from '../portfolio.service';
import {ReposItem} from './repo-item';
import {UserService} from '../../../user.service';
import {User} from "../../../user";


@Component({
    selector: 'app-portfolio-works-list',
    templateUrl: './portfolio-works-list.component.html',
    styleUrls: ['./portfolio-works-list.component.scss']
})
export class PortfolioWorksListComponent implements OnInit {
    @Input() isEnabledEditMode;
    initialReposList;
    reposStatesList = [];
    isExamleMode = false;
    viewUser;
    constructor(private us: UserService, private portServ: PortfolioService) {
        this.us.$viewUser.subscribe(viewUser => {
            this.viewUser = viewUser;
        });
    }

    onChange(isValid, i) {
        this.reposStatesList[i] = isValid;
        this.portServ.isWorksListValid.next(!this.reposStatesList.filter(item => item === false).length);
        this.us.$isUserChange.next(true);
    }

    updateUserReposList() {
        this.us.getUserRepos(this.viewUser.portfolio.reposUrl)

        // Delete items that are not found in gh
            .subscribe(repos => {

                if (this.viewUser.reposList) {
                    this.initialReposList = this.viewUser.portfolio.reposList.filter(repo => {
                        return this.arrayObjectIndexOf(repos, repo.id, 'id') >= 0;
                    });

                    // Add new items from gh
                    repos.filter(repo => {
                        return this.arrayObjectIndexOf(this.viewUser.portfolio.reposList, repo.id, 'id') === -1;
                    }).map(newRepo => this.initialReposList.unshift(new ReposItem(newRepo)));
                } else {
                    this.viewUser.portfolio.reposList = User.addRepos(repos);
                    this.initialReposList = User.addRepos(repos);
                }

                this.us.$isUserChange.next(true);
            });
    }

    arrayObjectIndexOf(arr, searchTerm, property) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][property] === searchTerm) {
                return i;
            }
        }
        return -1;
    }
    hide() {
        this.us.$isUserChange.next(true);
    }
    ngOnInit() {
        this.us.$viewUser.subscribe(viewUser => {
            if (viewUser.login === 'example') {
                this.isExamleMode = true;
            }
        });

        this.us.$isEnabledEditMode.subscribe(isEnabledEditMode => {
            if (!isEnabledEditMode) {
                this.initialReposList = this.viewUser.portfolio.reposList ?
                    this.viewUser.portfolio.reposList.filter(repo => !repo.hide) : this.viewUser.portfolio.reposList;
            } else {
                this.initialReposList = this.viewUser.portfolio.reposList;
            }
        });
    }

}
