import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from '../../../models/Blog';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'],
})
export class CreateBlogComponent implements OnInit {
  @Output() addBlog: EventEmitter<Blog> = new EventEmitter();

  title: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    let blog = new Blog(0, this.title);
    this.addBlog.emit(blog);
    form.reset();
  }
}
