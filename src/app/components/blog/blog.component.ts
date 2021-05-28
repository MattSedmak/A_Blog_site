import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/Post';

import { Blog } from '../../models/Blog';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blog: Blog;
  blogId: number;
  title: string;
  edit: boolean = false;
  loading: boolean = false;
  errorMsg: string;
  error: boolean = false;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.blogId = Number(data.get('id'));
    });
    this.getBlog();
  }
  getBlog(): void {
    this.loading = true;
    this.blogService.getBlog(this.blogId).subscribe(
      (blog) => {
        this.blog = blog;
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        this.error = true;
        this.loading = false;
        this.errorMsg = 'Error getting blog. Please try again.';
      }
    );
  }

  addPost(newPost: Post): void {
    this.loading = true;
    this.blogService.addPost(newPost).subscribe(
      (post) => {
        this.blog.posts.push(post);
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        this.error = true;
        this.loading = false;
        this.errorMsg = 'Error adding post. Please try again.';
      }
    );
  }
  deleteBlog(id: number): void {
    this.blogService.deleteBlog(id).subscribe(
      () => {
        this.router.navigate([`/blogs`]);
      },
      (error) => {
        this.error = true;
        this.loading = false;
        this.errorMsg = 'Error deleting blog. Please try again.';
      }
    );
  }

  updateBlog(blog: Blog): void {
    this.blogService.updateBlog(blog, this.blogId).subscribe(() => {
      this.getBlog();
      this.edit = false;
    });
  }
  editTitle(): void {
    this.edit = !this.edit;
  }
}
