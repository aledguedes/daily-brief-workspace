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
      <app-header />

      <div
        id="sidebar"
        [class.translate-x-0]="isSidebarOpen"
        [class.-translate-x-full]="!isSidebarOpen"
        class="fixed left-0 top-14 h-full w-64 bg-white shadow-lg transform lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 overflow-y-auto"
      >
        <app-sidebar [navItems]="navItems" />
      </div>

      <div
        id="overlay"
        [class.hidden]="!isSidebarOpen"
        (click)="closeSidebar()"
        class="fixed inset-0 bg-black/30 z-30 lg:hidden 
         backdrop-blur-sm backdrop-saturate-150"
      ></div>

      <main class="lg:ml-64 pt-14 min-h-screen">
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

  // Array de navegação fornecido no prompt
  navItems: IMenu[] = [
    {
      id: 1,
      title: 'Dashboard',
      route: '/home',
      icon: 'ri-dashboard-line',
      childrens: [],
      hasChildren: false,
    },
    {
      id: 2,
      title: 'Automation',
      route: '/home/automation',
      icon: 'ri-signpost-line ri-lg',
      childrens: [
        {
          id: 3,
          title: 'Raw Materials',
          route: '/home/automation/raw-materials',
        },
        { id: 4, title: 'Production', route: '/home/automation/production' },
      ],
      hasChildren: true,
      isOpen: false,
    },
    {
      id: 5,
      title: 'Posts',
      route: '/home/posts',
      icon: 'ri-signpost-line',
      childrens: [
        {
          id: 6,
          title: 'All posts',
          route: '/home/posts/all',
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
      icon: 'ri-bubble-line',
      childrens: [],
      hasChildren: false,
    },
    {
      id: 11,
      title: 'Usuários',
      route: '/home/users',
      icon: 'ri-dashboard-line',
      childrens: [],
      hasChildren: false,
    },
    {
      id: 12,
      title: 'Analytics',
      route: '/home/analytics',
      icon: 'ri-user-follow-line',
      childrens: [],
      hasChildren: false,
    },
    {
      id: 13,
      title: 'Configurações',
      route: '/home/settings',
      icon: 'ri-settings-3-line',
      childrens: [],
      hasChildren: false,
    },
  ];

  ngOnInit() {
    // Escuta o estado da sidebar para controlar a visibilidade em mobile
    this.sidebarStateService.isSidebarOpen$.subscribe((isOpen) => {
      this.isSidebarOpen = isOpen;
    });
  }

  closeSidebar() {
    this.sidebarStateService.closeSidebar();
  }
}
