import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';

import {PageService} from './page/page.service';
import {UserService} from './user.service';

@Injectable()
export class UserResolve {
    constructor(private us: UserService, private ps: PageService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot) {
        this.ps.isPageLoad.next(false);
        return new Promise((resolve, reject) => {
            this.us.findUser(route.params['user']).subscribe(viewUser => {
                if (viewUser) {
                    resolve(viewUser);
                } else {
                    reject('User not found!');
                    this.router.navigate(['/not-found']);
                }
                this.ps.isPageLoad.next(true);
            });
        });
    }
}
