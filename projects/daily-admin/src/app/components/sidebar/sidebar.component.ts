import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenu } from '../../model/menu.model';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isOpen = false;
  @Input() isDesktop = false;
  @Output() closeRequest = new EventEmitter<void>();

  openedSubmenus = new Set<IMenu>();

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
      icon: 'ri-signpost-line',
      childrens: [
        {
          id: 3,
          title: 'Raw Materials',
          route: '/home/automation/raw-materials',
          // ícones não são usados nos filhos
        },
        {
          id: 4,
          title: 'Production',
          route: '/home/automation/production',
        },
      ],
      hasChildren: true,
    },
    {
      id: 5,
      title: 'Posts',
      route: '/home/posts',
      icon: 'ri-signpost-line',
      childrens: [],
      hasChildren: false,
    },
    {
      id: 6,
      title: 'Logs',
      route: '/home/logs',
      icon: 'ri-bubble-line',
      childrens: [],
      hasChildren: false,
    },
    {
      id: 7,
      title: 'Usuários',
      route: '/home/users',
      icon: 'ri-dashboard-line',
      childrens: [],
      hasChildren: false,
    },
    {
      id: 8,
      title: 'Analytics',
      route: '/home/analytics',
      icon: 'ri-user-follow-line',
      childrens: [],
      hasChildren: false,
    },
    {
      id: 9,
      title: 'Configurações',
      route: '/home/settings',
      icon: 'ri-settings-3-line',
      childrens: [],
      hasChildren: false,
    },
    {
      id: 10,
      title: 'Sair',
      route: '/',
      icon: 'ri-logout-circle-line',
      childrens: [],
      hasChildren: false,
    },
  ];

  closeSidebar() {
    this.closeRequest.emit();
  }

  toggleSubmenu(item: IMenu) {
    if (this.openedSubmenus.has(item)) {
      this.openedSubmenus.delete(item);
    } else {
      this.openedSubmenus.add(item);
    }
  }

  isSubmenuOpen(item: IMenu): boolean {
    return this.openedSubmenus.has(item);
  }
}
