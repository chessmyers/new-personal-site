export interface MusicPostModel {
  postID: string;
  postSlug: string;
  title: string;
  date: Date;
  body: Array<any>;
  videoURL: string;
}
