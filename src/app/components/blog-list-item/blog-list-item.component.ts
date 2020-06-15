import {Component, Input} from '@angular/core';
import {BlogListItemModel} from '../../models/blog-list-item.model';

@Component({
  selector: 'app-blog-list-item',
  templateUrl: './blog-list-item.component.html',
  styleUrls: ['./blog-list-item.component.scss']
})
export class BlogListItemComponent {

  @Input() data: BlogListItemModel;

}
