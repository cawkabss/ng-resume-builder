import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class PortfolioService {
  isHeaderValid = new BehaviorSubject(true);
  isWorksListValid = new BehaviorSubject(true);
  constructor() { }

}
