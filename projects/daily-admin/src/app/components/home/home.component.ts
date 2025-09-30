import { Component, inject, OnInit, signal } from '@angular/core';
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
  template: `
    <div class="bg-gray-50 min-h-screen">
      <app-header (toggleCollapse)="toggleCollapse()" />

      <div
        id="sidebar"
        [class.translate-x-0]="isSidebarOpen"
        [class.-translate-x-full]="!isSidebarOpen"
        (mouseenter)="handleMouseEnter()"
        (mouseleave)="handleMouseLeave()"
        [class.lg:w-20]="isSidebarRetracted"
        [class.lg:w-64]="!isSidebarRetracted"
        class="fixed left-0 top-16 h-full w-64 bg-white shadow-lg transform lg:translate-x-0 transition-all duration-300 ease-in-out z-40 overflow-y-auto"
      >
        <app-sidebar [navItems]="navItems" [isCollapsed]="isSidebarRetracted" />
      </div>

      <div
        id="overlay"
        [class.hidden]="!isSidebarOpen"
        (click)="closeSidebar()"
        class="fixed inset-0 bg-black/30 z-30 lg:hidden backdrop-blur-sm backdrop-saturate-150"
      ></div>

      <main
        class="min-h-screen transition-all duration-300 ease-in-out p-4 pt-16"
        [class.lg:ml-20]="isSidebarRetracted"
        [class.lg:ml-64]="!isSidebarRetracted"
      >
        <div class="p-6">
          <router-outlet />
        </div>
      </main>
    </div>
  `,
  styles: [
    `
      @keyframes fadeInOverlay {
        0% {
          opacity: 0;
          pointer-events: none;
        }
        30% {
          opacity: 0;
          pointer-events: none;
        }
        100% {
          opacity: 1;
          pointer-events: auto;
        }
      }

      .animate-fade-in {
        animation: fadeInOverlay 0.5s ease-out forwards;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  private sidebarStateService = inject(SidebarStateService);
  isSidebarOpen = false;
  isSidebarCollapsed = false;
  isCollapsed: boolean = true;
  isHovering: boolean = false;

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

  ngOnInit() {
    this.sidebarStateService.isSidebarOpen$.subscribe((isOpen) => {
      this.isSidebarOpen = isOpen;
    });

    this.sidebarStateService.isSidebarCollapsed$.subscribe((isCollapsed) => {
      this.isSidebarCollapsed = isCollapsed;
    });
  }

  get isSidebarRetracted(): boolean {
    return this.isCollapsed && !this.isHovering;
  }

  toggleMenu() {
    this.sidebarStateService.toggleSidebar();
  }

  closeSidebar() {
    this.sidebarStateService.closeSidebar();
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.isHovering = false;
  }

  handleMouseEnter(): void {
    if (this.isCollapsed) {
      this.isHovering = true;
    }
  }

  handleMouseLeave(): void {
    this.isHovering = false;
  }
}
