import {BlogElementType} from '../blog-element.type';

export class BlogElementHeader implements BlogElementType {
  type: 'header';
  size: 'Primary' | 'Secondary' | 'Tertiary' = 'Primary';
  color = '#000000';
}
