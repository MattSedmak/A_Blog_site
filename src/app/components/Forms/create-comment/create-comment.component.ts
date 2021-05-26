import { Comment } from '../../../models/Comment';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss'],
})
export class CreateCommentComponent implements OnInit {
  @Output() addComment: EventEmitter<Comment> = new EventEmitter();
  @Input() postId: number;

  comment: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    let newComment = new Comment(this.comment, this.postId);
    this.addComment.emit(newComment);
    form.reset();
  }
}
