import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserNotFoundComponent} from './user-not-found/user-not-found.component';

const ROUTES = [
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: 'not-found',
        component: UserNotFoundComponent
    },
    {
        path: ':user',
        loadChildren: 'app/user/user.module#UserModule',
    },
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(ROUTES)],
    declarations: []
})
export class AppRoutingModule {
}
