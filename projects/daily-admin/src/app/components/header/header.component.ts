import { Component, EventEmitter, HostListener, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarStateService } from '../../services/sidebar-state.service';
import { INotification } from '../../model/notidication.model';
import { RouterLink } from '@angular/router';

interface IMenuItem {
  id: number;
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() toggleCollapse = new EventEmitter<void>();
  private sidebarStateService = inject(SidebarStateService);

  userMenuItems: IMenuItem[] = [
    { id: 1, label: 'Editar Perfil', route: '/home/profile', icon: 'fas fa-user-edit' },
    { id: 2, label: 'Configurações', route: '/home/settings', icon: 'fas fa-cog' },
    { id: 3, label: 'Sair', route: '/', icon: 'fas fa-sign-out-alt' },
  ];

  notifications: INotification[] = [
    {
      id: 1,
      message: 'Novo comentário no post "Angular 20"',
      time: 'Há 5 minutos',
      icon: 'fas fa-comment-dots',
      iconColor: 'text-indigo-500',
    },
    {
      id: 2,
      message: 'Suas visualizações aumentaram em 15%',
      time: '1 hora atrás',
      icon: 'fas fa-chart-line',
      iconColor: 'text-green-500',
    },
    {
      id: 3,
      message: 'Novo usuário registrado',
      time: 'Ontem',
      icon: 'fas fa-user-plus',
      iconColor: 'text-orange-500',
    },
  ];

  isUserMenuOpen: boolean = false;
  isNotificationOpen: boolean = false;

  get newNotificationsCount(): number {
    return this.notifications.length;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    setTimeout(() => {
      if (this.isNotificationOpen) {
        this.isNotificationOpen = false;
      }
      if (this.isUserMenuOpen) {
        this.isUserMenuOpen = false;
      }
    }, 0);
  }

  toggleMenu() {
    this.sidebarStateService.toggleSidebar();
  }

  toggleNotificationDropdown(event: MouseEvent): void {
    event.stopPropagation();

    this.isUserMenuOpen = false;
    this.isNotificationOpen = !this.isNotificationOpen;
  }

  toggleUserMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.isNotificationOpen = false;
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  toggleSidebarCollapse(): void {
    console.log('TOGGLE SIDEBAR COLLAPSE', this.sidebarStateService.isSidebarCollapsed);
    this.sidebarStateService.toggleSidebarCollapse();
  }
}
