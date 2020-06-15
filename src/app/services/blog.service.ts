import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BlogPostModel} from '../models';
import {HttpClient} from '@angular/common/http';
import {BlogListItemModel} from '../models/blog-list-item.model';

@Injectable()
export class BlogService {

  backendURL = '/';

  constructor(
    private http: HttpClient
  ) {}

  getPostsList(): Observable<Array<BlogListItemModel>> {
    const path = `${this.backendURL}posts/`;
    return this.http.get<Array<BlogListItemModel>>(path);
  }

  getPost(postID: string): Observable<BlogPostModel> {
    const path = `${this.backendURL}posts/${postID}`;
    return this.http.get<BlogPostModel>(path);
  }
}
