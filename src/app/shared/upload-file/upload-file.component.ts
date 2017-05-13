import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {FirebaseApp} from 'angularfire2';
import * as firebase from 'firebase/app';

import {UserService} from '../../user/user.service';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  @Input() allowedExtensions: string[];
  @Input() btnTooltip: string;
  @Input() btnIcon: string;
  @Input() btnType?: string = 'default';
  @Input() btnText?: string;
  @Input() folderOnStorage: string;
  @Input() fileName: string;
  @Output() progress = new EventEmitter();
  @Output() upload = new EventEmitter();
  userUid;
  isError = false;
  constructor(private us: UserService, private fb: FirebaseApp) {
    this.us.$viewUser.subscribe(viewUser => this.userUid = viewUser.uid);
  }
  uploadFileOnStorage(file) {
    const fileExtension = file.name.split('.').pop();
    for (let i = 0; i < this.allowedExtensions.length; i++) {
      if (fileExtension === this.allowedExtensions[i]) {
        this.progress.emit(0);
        const storageRef = this.fb.storage().ref();
        const uploadTask = storageRef
            .child(`${this.userUid}/${this.folderOnStorage}/${this.fileName}.${fileExtension}`)
            .put(file);
        this.us.$isEnabledEditMode.subscribe(isEnabledEditMod => {
          if (!isEnabledEditMod) {
            uploadTask.cancel();
          }
        });
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => this.progress.emit(Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)),
            (error) => {},
            () => {
              this.upload.emit(uploadTask.snapshot.downloadURL);
              this.progress.emit(0);
              this.us.$isUserChange.next(true);
            }
        );
        return;
      }
    }
  }
  ngOnInit() {
  }

}
