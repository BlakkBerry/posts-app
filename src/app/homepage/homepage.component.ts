import {Component, OnInit} from '@angular/core';
import {PostService} from '../shared/services/post.service';
import {Post} from '../shared/types/Post';
import {Photo} from '../shared/types/Photo';
import {PhotoService} from '../shared/services/photo.service';
import {StyleService} from '../shared/services/style.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  posts: Array<Post> = [];
  photos: Array<Photo> = [];

  breakpoint = 4;
  backgroundColor = '#f5dcdc';

  constructor(private postService: PostService, private photoService: PhotoService, private styleService: StyleService) {
  }

  ngOnInit(): void {
    this.styleService.changeBackground(this.backgroundColor);

    this.postService.fetchPosts(10).subscribe(posts => this.posts = posts);
    this.photoService.fetchPhotos(10).subscribe(photos => this.photos = photos);
  }

  onResize(event: any): void {
    const width = event.target.innerWidth;

    if (width > 1200 && width < 2000) {
      this.breakpoint = 4;
    } else if (width > 768 && width < 1200) {
      this.breakpoint = 3;
    } else if (width > 600 && width < 768) {
      this.breakpoint = 2;
    } else if (event.target.innerWidth < 600) {
      this.breakpoint = 1;
    } else {
      this.breakpoint = 5;
    }
  }
}
