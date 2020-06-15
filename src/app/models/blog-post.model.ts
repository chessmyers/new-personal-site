import {BlogElementType} from './blog-element.type';
import {BlogListItemModel} from './blog-list-item.model';

export interface BlogPostModel extends BlogListItemModel {
  content: Array<BlogElementType>;
}
