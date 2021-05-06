import {Component, OnInit} from '@angular/core';
import {StyleService} from '../../services/style.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  opened = false;
  backgroundColor = 'white';

  constructor(private style: StyleService) {
  }

  ngOnInit(): void {
    this.style.currentBackground.subscribe(color => {
      this.backgroundColor = color;
    });
  }

}
