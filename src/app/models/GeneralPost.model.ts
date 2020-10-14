export interface GeneralPostModel {
  postID: string;
  postSlug: string;
  title: string;
  date: Date;
  image: any;
  body: Array<any>;
  furtherReading?: string;
}
