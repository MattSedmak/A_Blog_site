import { Comment } from './Comment';

const mydate = new Date();

export class Post {
  id: number;
  title: string;
  content: string;
  created: string;
  modified: string;
  blogId: number;
  comments: Comment[];
  constructor(id: number, title: string, content: string, blogId: number) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.created = mydate.toISOString();
    this.modified = mydate.toISOString();
    this.blogId = blogId;
    this.comments = [];
  }
}
