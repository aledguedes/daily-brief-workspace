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
    // canActivate: [authGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then((c) => c.DashboardComponent),
      },
      {
        path: 'posts',
        loadChildren: () => import('./pages/posts/posts.routes').then((m) => m.POSTS_ROUTES),
      },
      {
        path: 'users',
        loadComponent: () => import('./pages/users/users.component').then((c) => c.UsersComponent),
      },
      {
        path: 'logs',
        loadComponent: () => import('./pages/logs/logs.component').then((c) => c.LogsComponent),
      },
      {
        path: 'automation',
        loadComponent: () =>
          import('./pages/automation/automation.component').then((c) => c.AutomationComponent),
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
