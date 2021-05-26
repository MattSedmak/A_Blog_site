import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss'],
})
export class EditBlogComponent implements OnInit {
  @Output() editTitle: EventEmitter<Blog> = new EventEmitter();
  @Input() upDatedBlog: Blog;
  constructor() {}

  ngOnInit(): void {}
  onSubmit(form) {
    let blog = new Blog(this.upDatedBlog.id, this.upDatedBlog.title);
    this.editTitle.emit(blog);
    form.reset();
  }
}
