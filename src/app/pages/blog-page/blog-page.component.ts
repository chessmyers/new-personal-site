import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
  }

  changeTab({index}) {
    switch (index) {
      case 0: this.loadThoughts(); break;
      case 1: this.loadMusic(); break;
      case 2: this.loadBooks(); break;
    }
  }

  loadThoughts() {

  }

  async loadMusic() {
    const res = await this.postService.getContent();
    console.log(res);
  }

  loadBooks() {

  }

}
