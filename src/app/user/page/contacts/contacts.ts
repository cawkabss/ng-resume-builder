import { Map } from './map/map';

export class UserContacts {
    email: string;
    phone: string = '+380000000000';
    skype: string = 'username';
    map: Map = {
        lat: 50.4350544,
        lng: 30.5245329,
        zoom: 11
    };
    constructor(email) {
        this.email = email ? email : 'email@gmail.com';
    }
}
