import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-timeline-form',
  templateUrl: './timeline-form.component.html',
  styleUrls: ['./timeline-form.component.scss']
})
export class TimelineFormComponent implements OnInit {
  @Input() editMode? = false;
  @Input() timelineItem? = {
    title: '',
    desc: '',
    yearStart: 0,
    yearEnd: 0
  };
  @Output() deleteBox = new EventEmitter();
  @Output() changeBox = new EventEmitter();
  @Output() addBox = new EventEmitter();
  yearsRange;
  constructor() {
    this.yearsRange = this.getYearsRange(1980);
  }
  addTimelineBox(box) {
    this.addBox.emit(box);
  }
  onChangeBox(box, isValid) {
    this.changeBox.emit({
      box: box,
      isValid: isValid
    });
  }
  getYearsRange(startYear) {
    const currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;

    while ( startYear <= currentYear ) {
      years.push(startYear++);
    }

    return years;
  }
  ngOnInit() {}

}
