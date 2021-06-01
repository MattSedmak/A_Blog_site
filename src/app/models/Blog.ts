import { Post } from './Post';

const myDate = new Date();
export class Blog {
  id: number;
  title: string;
  created: Date;
  userId: number;
  posts: Post[];
  constructor(id: number, title: string, created: Date) {
    this.id = id;
    this.title = title;
    this.created = created;
    this.userId = 999;
    this.posts = [];
  }
}
