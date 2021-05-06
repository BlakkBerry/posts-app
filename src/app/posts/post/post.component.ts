import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../shared/types/Post';
import {MatDialog} from '@angular/material/dialog';
import {EditModalComponent} from './edit-modal/edit-modal.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: Post;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Post>();

  constructor(public dialog: MatDialog) {
  }

  openEditModal(): void {
    const dialogRef = this.dialog.open(EditModalComponent, {data: this.post});

    dialogRef.afterClosed().subscribe(post => {
      this.edit.emit(post);
    });
  }

  ngOnInit(): void {
  }

}
