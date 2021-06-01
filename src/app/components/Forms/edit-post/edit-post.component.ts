import { Component, OnInit } from '@angular/core';

import { Post } from '../../../models/Post';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  post: Post;
  postId: number;
  loading: boolean = false;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.loading = true;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.getPost(id).subscribe((post) => {
      this.post = post;
      this.loading = false;
    });
  }

  onSubmit(): void {
    this.loading = true;
    let post = new Post(
      this.post.id,
      this.post.title,
      this.post.content,
      this.post.blogId,
      this.post.created
    );
    this.blogService.updatePost(post, this.post.id).subscribe(() => {
      this.loading = false;
      this.router.navigate([`/blog/${this.post.blogId}/post/${this.post.id}`]);
    });
  }
}
