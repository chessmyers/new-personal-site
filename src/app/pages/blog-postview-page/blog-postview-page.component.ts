import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import {BlogService} from '../../services/blog.service';
import {Observable, Subscription} from 'rxjs';
import {BlogPostModel} from '../../models';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-blog-postview-page',
  templateUrl: './blog-postview-page.component.html',
  styleUrls: ['./blog-postview-page.component.scss']
})
export class BlogPostviewPageComponent implements OnInit, OnDestroy {

  post$: Observable<BlogPostModel>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {}

  postContentSubscription: Subscription;

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.blogService.getPost(params.get('id')))
    );
  }

  ngOnDestroy(): void {
    this.postContentSubscription.unsubscribe();
  }

}
