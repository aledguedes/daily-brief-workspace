import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  Input,
  ViewChild,
  signal,
  computed,
} from '@angular/core';
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
export class SidebarComponent implements AfterViewInit {
  @Input({ required: true }) navItems: IMenu[] = [];
  @ViewChild('asideRef') asideRef!: ElementRef;

  private sidebarStateService = inject(SidebarStateService);
  private router = inject(Router);

  isDesktop = signal<boolean>(true);
  hasScroll = signal<boolean>(false);
  isSidebarOpen = this.sidebarStateService.isSidebarOpen;
  isSidebarCollapsed = this.sidebarStateService.isSidebarCollapsed;

  ngOnInit() {
    this.updateIsDesktop();
  }

  ngAfterViewInit(): void {
    const el = this.asideRef.nativeElement;
    this.hasScroll.set(el.scrollHeight > el.clientHeight);
  }

  closeMenuOnNavigate(): void {
    this.sidebarStateService.closeSidebar();
  }

  toggleSubmenu(item: IMenu): void {
    if (!item.hasChildren) return;

    this.navItems.forEach((navItem) => {
      if (navItem.id !== item.id && navItem.isOpen) navItem.isOpen = false;
    });

    item.isOpen = !item.isOpen;
  }

  isSubmenuOpen(item: IMenu): boolean {
    return item.isOpen || false;
  }

  isParentActive(item: IMenu): boolean {
    if (!item.route || !item.hasChildren) return false;
    return this.router.url.includes(item.route);
  }

  @HostListener('window:resize')
  onResize() {
    this.updateIsDesktop();
  }

  private updateIsDesktop() {
    this.isDesktop.set(window.matchMedia('(min-width:1024px)').matches);
  }
}
