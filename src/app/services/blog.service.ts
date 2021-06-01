import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/Blog';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private httpClient: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    const userId = 999;
    return this.httpClient.get<Blog[]>(
      'https://mi-blogs.azurewebsites.net/api/Blogs/user/' + userId
    );
  }
  getBlog(id: number): Observable<Blog> {
    return this.httpClient.get<Blog>(
      'https://mi-blogs.azurewebsites.net/api/Blogs/' + id
    );
  }
  addBlog(blog: Blog): Observable<Blog> {
    return this.httpClient.post<Blog>(
      'https://mi-blogs.azurewebsites.net/api/Blogs',
      blog
    );
  }
  updateBlog(blog: Blog, id: number): Observable<Blog> {
    return this.httpClient.put<Blog>(
      'https://mi-blogs.azurewebsites.net/api/Blogs/' + id,
      blog
    );
  }

  deleteBlog(id: number): Observable<Blog> {
    return this.httpClient.delete<Blog>(
      'https://mi-blogs.azurewebsites.net/api/Blogs/' + id
    );
  }

  getPost(id: number): Observable<Post> {
    return this.httpClient.get<Post>(
      'https://mi-blogs.azurewebsites.net/api/Posts/' + id
    );
  }
  addPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(
      'https://mi-blogs.azurewebsites.net/api/Posts',
      post
    );
  }
  updatePost(post: Post, id: number): Observable<Post> {
    return this.httpClient.put<Post>(
      'https://mi-blogs.azurewebsites.net/api/Posts/' + id,
      post
    );
  }

  deletePost(id: number): Observable<Post> {
    return this.httpClient.delete<Post>(
      'https://mi-blogs.azurewebsites.net/api/Posts/' + id
    );
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(
      'https://mi-blogs.azurewebsites.net/api/Comments',
      comment
    );
  }
}
