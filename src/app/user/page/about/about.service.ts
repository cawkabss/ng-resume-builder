import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AboutService {
  isHeaderValid = new BehaviorSubject(true);
  isPersonalValid = new BehaviorSubject(true);
  isSkillsValid = new BehaviorSubject(true);
  constructor() { }

}
