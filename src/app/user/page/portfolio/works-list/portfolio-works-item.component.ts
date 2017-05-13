import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-portfolio-works-item',
  templateUrl: './portfolio-works-item.component.html',
  styleUrls: ['./portfolio-works-item.component.scss']
})
export class PortfolioWorksItemComponent implements OnInit {
  @Input() isEnabledEditMode;
  @Input() viewUser;
  @Input() repoItem;
  @Output() hidden = new EventEmitter();
  @Output() repoItemChange = new EventEmitter();
  progress;
  constructor() { }
  hide() {
    this.hidden.emit();
  }
  onChange(isValid) {
    this.repoItemChange.emit(isValid);
  }
  getDownloadUrl(url) {
    this.repoItem.image = url;
  }
  getProgress(progress) {
    this.progress = progress;
  }
  ngOnInit() {
  }

}
