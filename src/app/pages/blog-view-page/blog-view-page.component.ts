import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../services/post.service';
import {Document} from 'prismic-javascript/types/documents';
import {GeneralPostModel} from '../../models/GeneralPost.model';
import {MusicPostModel} from '../../models/MusicPost.model';
import {BookPostModel} from '../../models/BookPost.model';
import PrismicDOM from 'prismic-dom/src';
import {linkResolver} from '../../services/util';
import {strict} from 'assert';


@Component({
  selector: 'app-blog-view-page',
  templateUrl: './blog-view-page.component.html',
  styleUrls: ['./blog-view-page.component.css']
})
export class BlogViewPageComponent implements OnInit {
  htmlTitle;
  htmlBody;
  mainImage: Partial<HTMLImageElement>;
  mainVideo: Partial<HTMLVideoElement>;


  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) {
  }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    this.postService.getPost(postId)
      .then((res: Document[]) => {
        const doc = res[0];
        console.log(doc);
        this.htmlTitle = PrismicDOM.RichText.asHtml(doc.data.post_title, linkResolver);
        this.htmlBody = PrismicDOM.RichText.asHtml(doc.data.post_body, linkResolver);
        this.mainImage = {src: doc.data.main_image.url, alt: doc.data.main_image.alt};
        //this.mainVideo = this.post.videoURL && this.post.videoURL;
      });
  }

}
