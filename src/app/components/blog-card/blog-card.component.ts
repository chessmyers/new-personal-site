import {Component, Input, OnInit} from '@angular/core';
import {MusicPostModel} from '../../models/MusicPost.model';
import {BookPostModel} from '../../models/BookPost.model';
import {GeneralPostModel} from '../../models/GeneralPost.model';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input() post: MusicPostModel | BookPostModel | GeneralPostModel;
  @Input() color: string;
  constructor() { }

  ngOnInit(): void {
  }

  openPost() {

  }

}
