import { Post } from './Post';

const myDate = new Date();
export class Blog {
  id: number;
  title: string;
  created: string;
  userId: number;
  posts: Post[];
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.created = myDate.toISOString();
    this.userId = 999;
    this.posts = [];
  }
}
