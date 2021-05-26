import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDashboardComponent } from './components/blog-dashboard/blog-dashboard.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditPostComponent } from './components/Forms/edit-post/edit-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  { path: 'blog/:id/post/:id', component: PostDetailComponent },
  { path: 'post/:id/edit', component: EditPostComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'blogs', component: BlogDashboardComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
