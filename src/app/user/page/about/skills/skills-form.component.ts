import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent implements OnInit {
  @Output() addSkill = new EventEmitter();
  name;
  percentage;
  constructor() { }
  setPercentage(value) {
    this.percentage = value;
  }
  add(value) {
    this.percentage = 0;
    this.addSkill.emit(value);
  }
  ngOnInit() {
  }

}
