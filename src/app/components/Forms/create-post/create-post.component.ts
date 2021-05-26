import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../../../models/Post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  @Output() addPost: EventEmitter<Post> = new EventEmitter();
  @Input() blog: number;

  title: string;
  content: string;
  blogId: number;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.blogId = this.blog;
    this.title = this.title;
    this.content = this.content;
    let post = new Post(0, this.title, this.content, this.blogId);
    this.addPost.emit(post);
    form.reset();
  }
}
