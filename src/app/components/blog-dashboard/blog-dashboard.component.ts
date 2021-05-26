import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/Blog';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-dashboard',
  templateUrl: './blog-dashboard.component.html',
  styleUrls: ['./blog-dashboard.component.scss'],
})
export class BlogDashboardComponent implements OnInit {
  blogs: Blog[] = [];
  title: string;
  errorMsg: string;
  error: boolean = false;
  loading: boolean = false;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogs();
  }
  getBlogs(): void {
    this.loading = true;
    this.blogService.getBlogs().subscribe(
      (data) => {
        this.blogs = data;
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        this.error = true;
        this.errorMsg = 'Error getting blogs. Please try again...';
        this.loading = false;
      }
    );
  }
  addBlog(newblog: Blog): void {
    this.loading = true;
    this.blogService.addBlog(newblog).subscribe(
      (blog) => {
        this.blogs.push(blog);
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        this.error = true;
        this.errorMsg = 'Error adding blog. Please try again...';
        this.loading = true;
      }
    );
  }
}
