import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsRoutingModule} from './contacts-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AgmCoreModule} from 'angular2-google-maps/core';
import {UiModule} from '../../../shared/ui/ui.module';

import {ContactsComponent} from './contacts.component';
import {ContactService} from './contact.service';
import {PageModule} from '../page.module';
import {MapComponent} from './map/map.component';
import {FormComponent} from './form/form.component';

@NgModule({
    imports: [
        CommonModule,
        ContactsRoutingModule,
        PageModule,
        UiModule,
        ReactiveFormsModule,
        FormsModule,
        AgmCoreModule
    ],
    declarations: [
        ContactsComponent,
        MapComponent,
        FormComponent
    ],
    providers: [ContactService]
})
export class ContactsModule {
}
