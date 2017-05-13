import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input() isEnabledEditMode;
  @Input() timelineItem;
  @Output() deleteBox = new EventEmitter();
  @Output() boxUpdated = new EventEmitter();
  yearsRange;
  constructor() {
    this.yearsRange = this.getYearsRange(1980);
  }
  changeBox(res) {
    this.timelineItem = res.box;
    this.boxUpdated.emit(res.isValid);
  }
  getYearsRange(startYear) {
    const currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;

    while ( startYear <= currentYear ) {
      years.push(startYear++);
    }

    return years;
  }
  ngOnInit() {
  }

}
