import {Component, HostBinding, Input, OnInit} from '@angular/core';

import {PageService} from './page.service';
import {UserService} from '../user.service';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
    @Input() pageTitle;
    canEditUser;
    canEditPage;
    canSavePage;
    canSaveAside;
    isEnabledEditMode;
    isUserChange;
    viewUser;
    @HostBinding('class.loaded') isPageLoad = false;

    constructor(private us: UserService, private ps: PageService) {
        this.ps.canEditPage.subscribe(canEditPage => this.canEditPage = canEditPage);
        this.us.$canEditUser.subscribe(canEditUser => this.canEditUser = canEditUser);
        this.ps.$canSavePage.subscribe(canSavePage => this.canSavePage = canSavePage);
        this.ps.$canSaveAside.subscribe(canSaveAside => this.canSaveAside = canSaveAside);
        this.us.$isEnabledEditMode.subscribe(isEnabledEditMode => this.isEnabledEditMode = isEnabledEditMode);
        this.us.$isUserChange.subscribe(isUserChange => this.isUserChange = isUserChange);
        this.us.$viewUser.subscribe(viewUser => {
            if (viewUser) {
                this.viewUser = viewUser;
            }
        });
    }

    editPage() {
        this.ps.editPage(this.viewUser);
    }

    savePage() {
       this.ps.savePage();
    }

    cancelChanges() {
        this.ps.cancelChanges();
    }

    ngOnInit() {
        setTimeout(() => this.isPageLoad = true, 1);
    }

}
