import { Routes } from '@angular/router';

export const POSTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/posts/posts.component').then((c) => c.PostsComponent),
  },
  {
    path: 'all',
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
