import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {PostService} from '../../services/post.service';
import {PostModel} from '../../models/Post.model';

@Component({
  selector: 'app-blog-view-page',
  templateUrl: './blog-view-page.component.html',
  styleUrls: ['./blog-view-page.component.css']
})
export class BlogViewPageComponent implements OnInit {
  post$: Observable<PostModel>;
  thoughtsPosts$;

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    this.post$ = this.postService.getPost(postId);
  }

  loadThoughtsBlog() {

  }

  loadMusicBlog() {

  }

  loadBooksReviewBlog() {

  }

}
