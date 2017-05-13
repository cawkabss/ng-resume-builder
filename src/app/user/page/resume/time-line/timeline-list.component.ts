import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.scss']
})
export class TimelineListComponent implements OnInit {
  @Input() timelineList;
  @Input() isEnabledEditMode;
  @Output() timelineChanged = new EventEmitter();
  constructor() { }
  addBox(box) {
    this.timelineList.push(box);
    this.timelineChanged.emit(true);
  }
  deleteBox(i) {
    this.timelineList.splice(i, 1);
    this.timelineChanged.emit(!!this.timelineList.length);
  }
  ngOnInit() {
  }

}
