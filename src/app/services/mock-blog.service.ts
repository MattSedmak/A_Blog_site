import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blog } from '../models/Blog';

@Injectable({
  providedIn: 'root',
})
export class MockBlogService {
  constructor() {}

  testdata: Blog[] = [
    { id: 1, title: 'test blog', created: new Date(), userId: 999, posts: [] },
    {
      id: 2,
      title: 'test blog 2',
      created: new Date(),
      userId: 999,
      posts: [],
    },
    {
      id: 3,
      title: 'test blog 3',
      created: new Date(),
      userId: 999,
      posts: [],
    },
  ];

  getBlogs(): Observable<Blog[]> {
    const testBlogs = of(this.testdata);
    return testBlogs;
  }
}
