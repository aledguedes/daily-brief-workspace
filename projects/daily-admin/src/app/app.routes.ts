import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './services/auth-guard.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then((c) => c.DashboardComponent),
      },
      {
        path: 'posts', // Removi pathMatch para evitar conflito com posts/:id
        loadComponent: () => import('./pages/posts/posts.component').then((c) => c.PostsComponent),
      },
      {
        path: 'posts/:id',
        loadComponent: () =>
          import('./components/post-view/post-view.component').then((c) => c.PostViewComponent),
      },
      {
        path: 'users',
        loadComponent: () => import('./pages/users/users.component').then((c) => c.UsersComponent),
      },
      {
        path: 'logs',
        loadComponent: () => import('./pages/logs/logs.component').then((c) => c.LogsComponent),
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
