import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ResumeService {
  isHeaderValid = new BehaviorSubject(true);
  isEducationValid = new BehaviorSubject(true);
  isWorkExperianceValid = new BehaviorSubject(true);
  constructor() { }

}
