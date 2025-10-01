import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarStateService } from '../../services/sidebar-state.service';
import { IMenu } from '../../model/menu.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private sidebarStateService = inject(SidebarStateService);
  isSidebarOpen = this.sidebarStateService.isSidebarOpen;
  isSidebarCollapsed = this.sidebarStateService.isSidebarCollapsed;
  isCollapsed = signal<boolean>(false); // Inicializado como false para desktop
  isHovering = signal<boolean>(false);

  isSidebarRetracted = computed(() => this.isCollapsed() && !this.isHovering());

  navItems: IMenu[] = [
    {
      id: 1,
      title: 'Dashboard',
      route: '/home/dashboard',
      icon: 'fas fa-chart-line',
      childrens: [],
      hasChildren: false,
    },
    {
      id: 2,
      title: 'Automation',
      route: '/home/automation',
      icon: 'fas fa-robot',
      childrens: [
        {
          id: 3,
          title: 'Raw Materials',
          route: '/home/automation/raw-materials',
        },
        { id: 4, title: 'Production', route: '/home/automation/production', badgeCount: 5 },
      ],
      hasChildren: true,
      isOpen: false,
    },
    {
      id: 5,
      title: 'Posts',
      route: '/home/posts',
      icon: 'fas fa-newspaper',
      badgeCount: 10,
      childrens: [
        {
          id: 6,
          title: 'All posts',
          route: '/home/posts/all',
          badgeCount: 5,
        },
        { id: 7, title: 'Create post', route: '/home/posts/create' },
        { id: 8, title: 'Update post', route: '/home/posts/update' },
        { id: 9, title: 'Delete post', route: '/home/posts/delete' },
      ],
      hasChildren: true,
      isOpen: false,
    },
    {
      id: 10,
      title: 'Logs',
      route: '/home/logs',
      icon: 'fas fa-clipboard-list',
      childrens: [],
      hasChildren: false,
      badgeCount: 10,
    },
    {
      id: 11,
      title: 'Usuários',
      route: '/home/users',
      icon: 'fas fa-users',
      childrens: [],
      hasChildren: false,
    },
    {
      id: 12,
      title: 'Analytics',
      route: '/home/analytics',
      icon: 'fas fa-chart-bar',
      childrens: [],
      hasChildren: false,
    },
    {
      id: 13,
      title: 'Configurações',
      route: '/home/settings',
      icon: 'fas fa-cogs',
      childrens: [],
      hasChildren: false,
    },
  ];

  toggleMenu() {
    this.sidebarStateService.toggleSidebar();
  }

  closeSidebar() {
    this.sidebarStateService.closeSidebar();
  }

  toggleCollapse(): void {
    this.isCollapsed.set(!this.isCollapsed());
    this.isHovering.set(false);
  }

  handleMouseEnter(): void {
    if (this.isCollapsed()) {
      this.isHovering.set(true);
    }
  }

  handleMouseLeave(): void {
    this.isHovering.set(false);
  }
}
