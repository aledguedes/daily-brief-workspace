import { FormsModule } from '@angular/forms';
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { IMenu } from '../../model/menu.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  language = signal('pt');
  sidebarOpen = signal(false);
  private router = inject(Router);

  navItems: IMenu[] = [
    {
      title: 'Dashboard',
      route: '/',
      icon: 'ri-dashboard-line h-4 w-4',
    },
    {
      title: 'Posts',
      route: '/posts',
      icon: 'ri-signpost-line h-4 w-4',
    },
    {
      title: 'Logs',
      route: '/logs',
      icon: 'ri-bubble-line h-4 w-4',
    },
    {
      title: 'Usuários',
      route: '/users',
      icon: 'ri-dashboard-line h-4 w-4',
    },
    {
      title: 'Analytics',
      route: '/analytics',
      icon: 'ri-user-follow-line h-4 w-4',
    },
    {
      title: 'Configurações',
      route: '/settings',
      icon: 'ri-settings-3-line h-4 w-4',
    },
  ];

  toggleSidebar() {
    this.sidebarOpen.update((value) => !value);
  }

  logout() {
    localStorage.removeItem('mock-token');
    this.router.navigate(['/login']);
  }
}
