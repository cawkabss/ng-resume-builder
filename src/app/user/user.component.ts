import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DOCUMENT} from '@angular/platform-browser';

import {UserService} from './user.service';
import {User} from './user';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss', './user.component.media.scss'],
})
export class UserComponent implements OnInit {
    viewUser: User;
    constructor(private ar: ActivatedRoute,
                @Inject(DOCUMENT) private document: any,
                private us: UserService) {
        this.ar.data.subscribe(res => {
                this.us.checkByAdmin(res.viewUser);
                this.us.$viewUser.next(res.viewUser);
        });
    }
    onDeactivate() {
        this.document.body.scrollTop = 0;
    }
    ngOnInit() {
    }

}
