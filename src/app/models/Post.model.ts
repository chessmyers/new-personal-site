export interface PostModel {
  postID: string;
  postSlug: string;
  title: string;
  date: Date;
  image: any;
  body: Array<any>;
}
