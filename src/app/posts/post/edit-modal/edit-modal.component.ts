import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../../shared/types/Post';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {

  postForm = new FormGroup({
    id: new FormControl(this.post.id),
    userId: new FormControl(this.post.userId),
    title: new FormControl(this.post.title, [Validators.required]),
    body: new FormControl(this.post.body, [Validators.required])
  });

  constructor(@Inject(MAT_DIALOG_DATA) public post: Post) {
  }
}
