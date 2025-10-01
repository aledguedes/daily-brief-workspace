import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarStateService {
  private _isSidebarOpen = signal<boolean>(false);
  private _isSidebarCollapsed = signal<boolean>(false);

  isSidebarOpen = this._isSidebarOpen.asReadonly();
  isSidebarCollapsed = this._isSidebarCollapsed.asReadonly();

  toggleSidebar() {
    const newState = !this._isSidebarOpen();
    this._isSidebarOpen.set(newState);

    console.log('NEW STATE', newState);

    if (newState) {
      // Se abrir, garantir que não está collapsed
      this._isSidebarCollapsed.set(false);
    }
  }

  closeSidebar() {
    this._isSidebarOpen.set(false);
    this._isSidebarCollapsed.set(false);
  }

  toggleSidebarCollapse() {
    this._isSidebarCollapsed.set(!this._isSidebarCollapsed());
  }
}
