import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SidebarStateService } from '../../services/sidebar-state.service';
import { INotification } from '../../model/notidication.model';
import { notifications } from '../../data/notificationMock';
import { userMenuItems } from '../../data/linksMenus';
import { IUserMenu } from '../../model/menu.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private sidebarStateService = inject(SidebarStateService);

  userMenuItems: IUserMenu[] = userMenuItems;
  notifications: INotification[] = notifications;

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
}
