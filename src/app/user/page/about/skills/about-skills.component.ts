import {Component, Input, OnInit} from '@angular/core';

import {AboutService} from '../about.service';
import {UserService} from '../../../user.service';
import {SkillItem} from './skill';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrls: ['./about-skills.component.scss']
})
export class AboutSkillsComponent implements OnInit {
  @Input() isEnabledEditMode;
  @Input() aboutUser;

  constructor(private us: UserService, private as: AboutService) {}
  changeSkillPercentage(value, i) {
    if (this.aboutUser.skills[i].percentage !== value) {
      this.aboutUser.skills[i].percentage = value;
      this.us.$isUserChange.next(true);
    }
  }
  deleteSkill(i) {
    this.aboutUser.skills.splice(i, 1);
    this.as.isSkillsValid.next(!!this.aboutUser.skills.length);
    this.us.$isUserChange.next(true);
  }
  addSkill(skill: SkillItem) {
    if (this.aboutUser.skills) {
      this.aboutUser.skills.push(skill);
      this.as.isSkillsValid.next(!!this.aboutUser.skills.length);
      this.us.$isUserChange.next(true);
    } else {
      this.aboutUser.skills = [skill];
      this.as.isSkillsValid.next(true);
      this.us.$isUserChange.next(true);
    }
  }
  ngOnInit() {}
}
