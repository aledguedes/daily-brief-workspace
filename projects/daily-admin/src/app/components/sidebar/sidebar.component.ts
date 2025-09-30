import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { IMenu } from '../../model/menu.model';
import { SidebarStateService } from '../../services/sidebar-state.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Input({ required: true }) navItems: IMenu[] = [];

  private sidebarStateService = inject(SidebarStateService);
  private router = inject(Router);

  @Input() isCollapsed: boolean = false;

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

  isParentActive(item: IMenu): boolean {
    if (!item.route || !item.hasChildren) return false;

    const url = this.router.url;
    return url.includes(item.route);
  }
}
