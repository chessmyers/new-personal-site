import Prismic from 'prismic-javascript';
import {Injectable} from '@angular/core';
import BlogPostType from '../models/BlogPost.type';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiEndpoint = 'https://christophermyers-website.cdn.prismic.io/api/v2';

  async getContent(type: BlogPostType) {
    let contentType;
    switch (type) {
      case 'main': contentType = 'main_blog_posts';
                   break;
      case 'music': contentType = 'music_blog_posts';
                    break;
      case 'books': contentType = 'book_blog_posts';
                    break;
      default: contentType = 'main_blog_posts';
    }
    try {
      const api = await Prismic.getApi(this.apiEndpoint);
      const response = await api.query(Prismic.Predicates.at('document.type', contentType));
      return response.results;
    } catch (e) {
      console.error(e);
    }
  }

  async getPost(id: string) {
    try {
      const api = await Prismic.getApi(this.apiEndpoint);
      const response = await api.query(Prismic.Predicates.at('document.id', id));
      return response.results;
    } catch (e) {
      console.error(e);
    }
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
