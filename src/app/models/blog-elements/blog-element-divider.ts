import {BlogElementType} from '../blog-element.type';

export class BlogElementDivider implements BlogElementType {
  type: 'divider';
  size: 'Large' | 'Small' = 'Small';
  color: string;
}
