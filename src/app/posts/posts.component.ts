import {Component, OnInit} from '@angular/core';
import {PostService} from '../shared/services/post.service';
import {Post} from '../shared/types/Post';
import {PageEvent} from '@angular/material/paginator';
import {CreateModalComponent} from './post/create-modal/create-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {StyleService} from '../shared/services/style.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Array<Post> = [];
  breakpoint = 4;

  pageSize = 20;
  pageSizeOptions = [10, 20, 30];
  pageSlice: Array<Post> = [];
  backgroundColor = '#e9fce5';

  constructor(private postService: PostService, public dialog: MatDialog, private styleService: StyleService) {
  }

  ngOnInit(): void {
    this.styleService.changeBackground(this.backgroundColor);

    this.setBreakpoint();

    this.postService.fetchPosts().subscribe(posts => {
      this.posts = posts;
      this.pageSlice = this.posts.slice(0, this.pageSize);
    });
  }

  onPageChange(event: PageEvent): any {
    const startIdx = event.pageIndex * event.pageSize;
    let endIdx = startIdx + event.pageSize;
    if (endIdx > this.posts.length) {
      endIdx = this.posts.length;
    }
    this.pageSlice = this.posts.slice(startIdx, endIdx);
  }

  setBreakpoint(): void {
    const width = window.innerWidth;

    if (width > 1200 && width < 2000) {
      this.breakpoint = 4;
    } else if (width > 768 && width < 1200) {
      this.breakpoint = 3;
    } else if (width > 600 && width < 768) {
      this.breakpoint = 2;
    } else if (width < 600) {
      this.breakpoint = 1;
    } else {
      this.breakpoint = 5;
    }
  }

  deletePost(id: number): void {
    this.pageSlice = this.pageSlice.filter(post => post.id !== id);
  }

  editPost(newPost: Post): void {
    this.pageSlice = this.pageSlice.map(post => post.id === newPost.id ? newPost : post);
  }

  openCreateModal(): void {
    const dialogRef = this.dialog.open(CreateModalComponent);

    dialogRef.afterClosed().subscribe(post => {
      if (post) {
        this.pageSlice.unshift(post);
      }
    });
  }
}
