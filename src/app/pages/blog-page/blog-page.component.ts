import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';
import {PostCardModel} from '../../models/PostCard.model';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  generalPosts: PostCardModel[] = [];
  musicPosts: PostCardModel[] = [];
  bookPosts: PostCardModel[] = [];

  generalColor = '#81d163';
  musicColor = '#8277ff';
  bookColor = '#8eabff';

  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    this.loadGeneral();
  }

  changeTab({index}) {
    switch (index) {
      case 0:
        this.loadGeneral();
        break;
      case 1:
        this.loadMusic();
        break;
      case 2:
        this.loadBooks();
        break;
    }
  }

  loadGeneral() {
    if (this.generalPosts.length === 0) {
      this.postService.getContent('main')
        .then(res => {
          this.generalPosts = res.map(post => {
            return {
              postID: post.id,
              postSlug: post.slugs[0],
              title: post.data.post_title[0].text,
              date: new Date(post.data.post_date),
            };
          });
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  loadMusic() {
    if (this.musicPosts.length === 0) {
      this.postService.getContent('music')
        .then(res => {
          this.musicPosts = res.map(post => ({
            postID: post.id,
            postSlug: post.slugs[0],
            title: post.data.post_title[0].text,
            date: new Date(post.data.post_date),
          }));
        })
        .catch(console.error);
    }
  }

  loadBooks() {
    if (this.bookPosts.length === 0) {
      this.postService.getContent('books')
        .then(res => {
          this.bookPosts = res.map(post => ({
            postID: post.id,
            postSlug: post.slugs[0],
            title: post.data.post_title[0].text,
            date: new Date(post.data.post_date),
          }));
        })
        .catch(console.error);
    }
  }

}
