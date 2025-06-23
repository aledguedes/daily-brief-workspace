import { IPost } from './post.model';

export interface IHomePage {
  latestPost: IPost;
  recentPosts: IPost[];
}
