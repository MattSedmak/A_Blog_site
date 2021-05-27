import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { Comment } from '../../models/Comment';

import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post: Post;
  postId: number;
  // errorMsg: string = '';
  error: boolean = false;
  loading: boolean = false;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.postId = Number(data.get('id'));
    });
    this.getPost();
    this.getComments();
  }
  getPost(): void {
    this.loading = true;
    this.blogService.getPost(this.postId).subscribe(
      (post) => {
        this.post = post;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.error = true;
      }
    );
  }
  deletePost(id: number): void {
    this.loading = true;
    this.blogService.deletePost(id).subscribe(
      () => {
        this.loading = false;
        this.router.navigate([`/blog/${this.post.blogId}`]);
      },
      (error) => {
        this.error = true;
        this.loading = false;
      }
    );
  }
  getComments(): void {
    let postId = this.post.id;
    this.blogService.getComments().subscribe((data) => {
      this.post.comments = data.filter((c) => {
        c.id == postId;
      });
    });
  }
  addComment(newComment: Comment) {
    this.loading = true;
    this.blogService.addComment(newComment).subscribe((comment) => {
      this.post.comments.push(comment);
      this.loading = false;
    });
  }
}
