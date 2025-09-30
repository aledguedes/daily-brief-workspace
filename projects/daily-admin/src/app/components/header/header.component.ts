import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { IMenu } from '../../model/menu.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  language = signal('pt');
  sidebarOpen = signal(false);
  isMobileMenuOpen = signal(false);

  @Output() closeRequest: EventEmitter<void> = new EventEmitter<void>();

  private router = inject(Router);

  toggleSidebar() {
    this.sidebarOpen.update((value) => !value);
  }

  logout() {
    localStorage.removeItem('mock-token');
    this.router.navigate(['/login']);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((value) => !value);
    this.closeRequest.emit();
  }

  toggleMobileSidebar() {
    this.closeRequest.emit();
  }
}
