import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogService } from 'src/app/services/blog.service';
import { MockBlogService } from 'src/app/services/mock-blog.service';
import { HttpClientModule } from '@angular/common/http';

import { BlogDashboardComponent } from './blog-dashboard.component';
import { fromEventPattern } from 'rxjs';

describe('BlogDashboardComponent', () => {
  let component: BlogDashboardComponent;
  let fixture: ComponentFixture<BlogDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogDashboardComponent],
      imports: [HttpClientModule],
      providers: [{ provide: BlogService, useClass: MockBlogService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have blogs', () => {
    expect(component.blogs.length).toBeGreaterThan(0);
    expect(component.blogs[0].title).toBe('test blog');
  });
});
