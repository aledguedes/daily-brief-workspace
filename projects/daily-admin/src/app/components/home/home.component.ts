import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarStateService } from '../../services/sidebar-state.service';
import { IMenu } from '../../model/menu.model';
import { sidebarMenus } from '../../data/linksMenus';

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
  isSidebarRetracted = this.sidebarStateService.isSidebarRetracted;

  navItems: IMenu[] = sidebarMenus;

  toggleMenu() {
    this.sidebarStateService.toggleSidebar();
  }

  closeSidebar() {
    this.sidebarStateService.closeSidebar();
  }
}
