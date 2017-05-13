import {Component, Input, OnInit} from '@angular/core';

import {UserService} from '../../../user.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() map;
  marker = {};
  isEnabledEditMode;
  constructor(private us: UserService) { }
  mapClicked(value) {
    if (this.isEnabledEditMode) {
      this.map.marker = {
        lat: value.coords.lat,
        lng: value.coords.lng
      };
      this.us.$isUserChange.next(true);
    }
  }
  changeCenter(value) {
    if (this.isEnabledEditMode) {
      this.map.lat = value.lat;
      this.map.lng = value.lng;
      this.us.$isUserChange.next(true);
    }
  }
  changeZoom(value) {
    if (this.isEnabledEditMode) {
      this.map.zoom = value;
      this.us.$isUserChange.next(true);
    }
  }

  ngOnInit() {
    this.us.$isEnabledEditMode
        .subscribe(isEnabledEditMode => this.isEnabledEditMode = isEnabledEditMode);
  }

}
