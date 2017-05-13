import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';

import {UserService} from '../../user.service';

@Injectable()
export class MessagesResolve {
    constructor(private us: UserService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot) {
        return new Promise((resolve, reject) => {
            this.us.findUser(route.parent.params['user']).subscribe(viewUser => {
                this.us.checkByAdmin(viewUser).then(res => {
                    if (res) {
                        resolve(res);
                    } else {
                        reject('error');
                        this.router.navigate(['./' + viewUser.login]);
                    }
                });
            });
        });
    }
}
