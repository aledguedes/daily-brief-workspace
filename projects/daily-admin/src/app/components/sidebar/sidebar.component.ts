import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IMenu } from '../../model/menu.model';
import { SidebarStateService } from '../../services/sidebar-state.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input({ required: true }) navItems: IMenu[] = [];
  private sidebarStateService = inject(SidebarStateService);

  closeMenuOnNavigate(): void {
    this.sidebarStateService.closeSidebar();
  }

  toggleMenu(item: IMenu): void {
    if (!item.hasChildren) {
      return;
    }

    this.navItems.forEach((navItem) => {
      if (navItem.id !== item.id && navItem.isOpen) {
        navItem.isOpen = false;
      }
    });

    item.isOpen = !item.isOpen;
  }
}
