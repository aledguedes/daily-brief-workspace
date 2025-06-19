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

  mobileMenuOpen = false;

  navItems: IMenu[] = [
    {
      title: 'Dashboard',
      route: '/home',
      icon: 'ri-dashboard-line',
    },
    {
      title: 'Posts',
      route: '/home/posts',
      icon: 'ri-signpost-line',
    },
    {
      title: 'Logs',
      route: '/home/logs',
      icon: 'ri-bubble-line',
    },
    {
      title: 'Usuários',
      route: '/home/users',
      icon: 'ri-dashboard-line',
    },
    {
      title: 'Analytics',
      route: '/home/analytics',
      icon: 'ri-user-follow-line',
    },
    {
      title: 'Configurações',
      route: '/home/settings',
      icon: 'ri-settings-3-line',
    },
    {
      title: 'Sair',
      route: '/',
      icon: 'ri-logout-circle-line',
    },
  ];

  toggleSidebar() {
    this.sidebarOpen.update((value) => !value);
  }

  logout() {
    localStorage.removeItem('mock-token');
    this.router.navigate(['/login']);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
