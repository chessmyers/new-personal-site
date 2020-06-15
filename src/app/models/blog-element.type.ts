import {BlogElementParagraph} from './blog-elements/blog-element-paragraph';
import {BlogElementImage} from './blog-elements/blog-element-image';
import {BlogElementHeader} from './blog-elements/blog-element-header';
import {BlogElementDivider} from './blog-elements/blog-element-divider';

export interface BlogElementType {
  type: 'paragraph' | 'header' | 'image' | 'divider';
  color: string;
  size: string;
}
