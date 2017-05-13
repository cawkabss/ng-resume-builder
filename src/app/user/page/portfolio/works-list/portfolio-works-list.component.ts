import {Component, Input, OnChanges, OnInit} from '@angular/core';

import {PortfolioService} from '../portfolio.service';
import {ReposItem} from './repo-item';
import {UserService} from '../../../user.service';


@Component({
    selector: 'app-portfolio-works-list',
    templateUrl: './portfolio-works-list.component.html',
    styleUrls: ['./portfolio-works-list.component.scss']
})
export class PortfolioWorksListComponent implements OnInit, OnChanges {
    @Input() isEnabledEditMode;
    @Input() reposList;
    initialReposList;
    @Input() reposUrl;
    reposStatesList = [];
    isExamleMode = false;
    constructor(private us: UserService, private portServ: PortfolioService) {
    }

    onChange(isValid, i) {
        this.reposStatesList[i] = isValid;
        this.portServ.isWorksListValid.next(!this.reposStatesList.filter(item => item === false).length);
        this.us.$isUserChange.next(true);
    }

    updateUserReposList() {
        this.us.getUserRepos(this.reposUrl)

        // Delete items that are not found in gh
            .subscribe(repos => {
                this.reposList = this.reposList.filter(repo => {
                    return this.arrayObjectIndexOf(repos, repo.id, 'id') >= 0;
                });

                // Add new items from gh
                repos.filter(repo => {
                    return this.arrayObjectIndexOf(this.reposList, repo.id, 'id') === -1;
                }).map(newRepo => this.reposList.unshift(new ReposItem(newRepo)));

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
    }

    ngOnChanges() {
        this.us.$isEnabledEditMode.subscribe(isEnabledEditMode => {
            if (!isEnabledEditMode) {
                this.initialReposList = this.reposList.filter(repo => !repo.hide);
            } else {
                this.initialReposList = this.reposList;
            }
        }).unsubscribe();
    }
}
