import { Comment } from './Comment';

const mydate = new Date();

export class Post {
  id: number;
  title: string;
  content: string;
  created: Date;
  modified: string;
  blogId: number;
  comments: Comment[];
  constructor(
    id: number,
    title: string,
    content: string,
    blogId: number,
    created: Date
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.created = created;
    this.modified = mydate.toISOString();
    this.blogId = blogId;
    this.comments = [];
  }
}
