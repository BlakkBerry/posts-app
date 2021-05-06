import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent {

  postForm = new FormGroup({
    id: new FormControl(Date.now()),
    userId: new FormControl(1),
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
  });

  constructor() {
  }
}
