import Prismic from 'prismic-javascript';
import {PostModel} from '../models/Post.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiEndpoint = 'https://christophermyers-website.cdn.prismic.io/api/v2';

  async getContent() {
    try {
      const api = await Prismic.getApi(this.apiEndpoint)
      const response = await api.query('')
      return response.results;
    } catch (e) {
      console.error(e);
    }
  }

  getPost(id: string): any {
    Prismic.getApi(this.apiEndpoint)
      .then(api => {
        return api.query('');
      })
      .catch(err => {
        console.log("something went wrong: ", err);
      });
  }

  resolveLink(doc) {
    console.log('Doc type:', doc.type);
    if (doc.type === 'page') {
      return '/page/' + doc.uid;
    } else if (doc.type === 'blog_post') {
      return '/blog/' + doc.uid;
    }

    return '/';
  }


}
