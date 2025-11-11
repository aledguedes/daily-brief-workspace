import { PostAutomationComponent } from './components/post-automation/post-automation.component';
import { Routes } from '@angular/router';

export const POSTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/posts/posts.component').then((c) => c.PostsComponent),
  },
  {
    path: 'all-automations',
    loadComponent: () =>
      import('./components/post-automation/post-automation.component').then(
        (c) => c.PostAutomationComponent,
      ),
  },
  {
    path: 'all-generateds',
    loadComponent: () =>
      import('./components/post-list/post-list.component').then((c) => c.PostListComponent),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./components/post-list/post-list.component').then((c) => c.PostListComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('../../components/post-view/post-view.component').then((c) => c.PostViewComponent),
  },
];
