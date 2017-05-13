import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/first';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {SkillItem} from './page/about/skills/skill';
import {User} from './user';

@Injectable()
export class UserService {
    $viewUser = new BehaviorSubject<User>(null);
    $isUserChange = new BehaviorSubject<boolean>(false);
    $viewUserClone = new BehaviorSubject<User>(null);
    $canEditUser = new BehaviorSubject<boolean>(false);
    $isEnabledEditMode = new BehaviorSubject<boolean>(false);

    constructor(private db: AngularFireDatabase,
                private http: Http,
                private afAuth: AngularFireAuth) {
    }

    createNewUser(token, userUid, email): Observable<User> {
        return this.getUserInfoFromGH(token)
            .mergeMap(user => {
                return Observable.forkJoin(
                    Observable.of(user),
                    this.getUserRepos(user.repos_url)
                );
            })
            .map(res => {
                const user = new User(userUid, email, res[0]);
                user.addRepos(res[1]);
                const defaultSkills = this.defineUserSkillsFromReposLang(res[1]);
                user.addSkills(defaultSkills);
                return user;
            })
            .map(user => this.db.object(`/users/${ userUid }`).set(user))
            .mergeMap(user => this.getUserfromDB(userUid));
    }

    getUserfromDB(userUid): Observable<User> {
        return this.db.object(`/users/${ userUid }`);
    }

    getUserInfoFromGH(token) {
        return this.http.get(`https://api.github.com/user?access_token=${token}`)
            .map(user => user.json());
    }

    getUserRepos(url) {
        return this.http.get(url)
            .map(res => res.json())
            .map(repoList => repoList.filter((repo) => repo.fork === false));
    }

    defineUserSkillsFromReposLang(reposList): SkillItem[] {
        const languages = new Set();
        reposList.forEach((repo) => {
            languages.add(repo.language);
        });
        return Array.from(languages)
            .filter((lang) => lang !== null)
            .map((lang) => {
                return {
                    name: lang,
                    percentage: Math.floor(Math.random() * (100 + 1))
                };
            });
    }

    findUser(userLogin) {
        return this.db.list('users/', {
            query: {
                orderByChild: 'login',
                equalTo: userLogin
            }
        }).first().map(users => {
            if (users.length) {
                delete users[0].messages;
                return users[0];
            }
        });
    }
    checkUserFromDb(userUid) {
        return this.db.object(`/users/${ userUid }`)
            .map(user => {
                if (user.$value !== null) {
                    return user;
                } else {
                    return null;
                }
            });
    }

    checkByAdmin(viewUser) {
        return new Promise((resolve, reject) => {
            this.afAuth.authState.subscribe(auth => {
                if (auth && viewUser) {
                    if (viewUser.uid === auth.uid) {
                        this.$canEditUser.next(true);
                        resolve(true);
                    } else {
                        this.$canEditUser.next(false);
                        resolve(false);
                    }
                } else {
                    this.$canEditUser.next(false);
                    resolve(false);
                }
            });
        });
    }

    cloneUser(obj) {
        let copy;

        // Handle the 3 simple types, and null or undefined
        if (null == obj || 'object' !== typeof obj) {
            return obj;
        }

        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            copy = [];
            for (let i = 0; i < obj.length; i++) {
                copy[i] = this.cloneUser(obj[i]);
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            copy = {};
            for (const attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    copy[attr] = this.cloneUser(obj[attr]);
                }
            }
            return copy;
        }
    }

    updateUser(uid, value) {
        this.db.object(`/users/${ uid }`).update(value);
    }
}
