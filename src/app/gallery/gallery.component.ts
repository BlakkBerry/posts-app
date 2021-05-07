import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../shared/services/photo.service';
import {Photo} from '../shared/types/Photo';
import {Post} from '../shared/types/Post';
import {PageEvent} from '@angular/material/paginator';
import {StyleService} from '../shared/services/style.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  photos: Array<Photo> = [];

  breakpoint = 6;

  pageSize = 20;
  pageSizeOptions = [10, 20, 30];
  pageSlice: Array<Photo> = [];
  backgroundColor = '#efefce';

  constructor(private photoService: PhotoService, private styleService: StyleService) {
  }

  ngOnInit(): void {
    this.styleService.changeBackground(this.backgroundColor);

    this.setBreakpoint();

    this.photoService.fetchPhotos(100).subscribe(photos => {
      this.photos = photos;
      this.pageSlice = this.photos.slice(0, this.pageSize);
    });
  }

  onPageChange(event: PageEvent): any {
    const startIdx = event.pageIndex * event.pageSize;
    let endIdx = startIdx + event.pageSize;
    if (endIdx > this.photos.length) {
      endIdx = this.photos.length;
    }
    this.pageSlice = this.photos.slice(startIdx, endIdx);
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

}
