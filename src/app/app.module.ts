import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { BlogDashboardComponent } from './components/blog-dashboard/blog-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateBlogComponent } from './components/Forms/create-blog/create-blog.component';
import { FormsModule } from '@angular/forms';
import { CreatePostComponent } from './components/Forms/create-post/create-post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CreateCommentComponent } from './components/Forms/create-comment/create-comment.component';
import { CommentComponent } from './components/comment/comment.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditBlogComponent } from './components/Forms/edit-blog/edit-blog.component';
import { EditPostComponent } from './components/Forms/edit-post/edit-post.component';
import { SpinnerComponent } from './components/UI/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    PostComponent,
    BlogDashboardComponent,
    CreateBlogComponent,
    CreatePostComponent,
    PostDetailComponent,
    CreateCommentComponent,
    CommentComponent,
    PageNotFoundComponent,
    EditBlogComponent,
    EditPostComponent,
    SpinnerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
