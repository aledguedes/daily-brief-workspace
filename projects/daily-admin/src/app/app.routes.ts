import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then((c) => c.DashboardComponent),
      },
      {
        path: 'posts', // Rota para /home/posts (ex: lista de posts)
        loadComponent: () => import('./posts/posts.component').then((c) => c.PostsComponent),
        pathMatch: 'full', // Garante que esta rota corresponda exatamente a /home/posts
      },
      {
        path: 'posts/:id', // Rota para /home/posts/:id (ex: visualização de um post específico)
        loadComponent: () =>
          import('./components/post-view/post-view.component').then((c) => c.PostViewComponent),
      },
      {
        path: 'users',
        loadComponent: () => import('./users/users.component').then((c) => c.UsersComponent),
      },
      {
        path: 'logs',
        loadComponent: () => import('./logs/logs.component').then((c) => c.LogsComponent),
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
