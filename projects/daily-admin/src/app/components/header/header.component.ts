import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarStateService } from '../../services/sidebar-state.service';
import { INotification } from '../../model/notidication.model';
import { RouterLink } from '@angular/router';

interface IMenuItem {
  id: number;
  label: string;
  route: string;
  icon: string; // Classe do Remix Icon (ex: 'ri-edit-line')
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private sidebarStateService = inject(SidebarStateService);

  userMenuItems: IMenuItem[] = [
    // Ícones do Font Awesome: fas fa-user-edit, fas fa-cog, fas fa-sign-out-alt
    { id: 1, label: 'Editar Perfil', route: '/home/profile', icon: 'fas fa-user-edit' },
    { id: 2, label: 'Configurações', route: '/home/settings', icon: 'fas fa-cog' },
    // Item de sair
    { id: 3, label: 'Sair', route: '/', icon: 'fas fa-sign-out-alt' },
  ];

  notifications: INotification[] = [
    {
      id: 1,
      message: 'Novo comentário no post "Angular 20"',
      time: 'Há 5 minutos',
      icon: 'fas fa-comment-dots', // Font Awesome
      iconColor: 'text-indigo-500',
    },
    {
      id: 2,
      message: 'Suas visualizações aumentaram em 15%',
      time: '1 hora atrás',
      icon: 'fas fa-chart-line', // Font Awesome
      iconColor: 'text-green-500',
    },
    {
      id: 3,
      message: 'Novo usuário registrado',
      time: 'Ontem',
      icon: 'fas fa-user-plus', // Font Awesome
      iconColor: 'text-orange-500',
    },
  ];

  isUserMenuOpen: boolean = false;
  isNotificationOpen: boolean = false;

  get newNotificationsCount(): number {
    return this.notifications.length;
  }

  // MÉTODO PRINCIPAL PARA FECHAR AMBOS AO CLICAR FORA
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
    // Fechar o menu de usuário se estiver aberto
    this.isUserMenuOpen = false;
    this.isNotificationOpen = !this.isNotificationOpen;
  }

  // NOVO MÉTODO: Alterna o dropdown de usuário
  toggleUserMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.isNotificationOpen = false;
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
}
