import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarStateService {
  private _isSidebarOpen = new BehaviorSubject<boolean>(false);
  isSidebarOpen$ = this._isSidebarOpen.asObservable();

  private _isSidebarCollapsed = new BehaviorSubject<boolean>(false);
  isSidebarCollapsed$ = this._isSidebarCollapsed.asObservable();

  constructor() {}

  toggleSidebar() {
    this._isSidebarOpen.next(!this._isSidebarOpen.value);

    if (!this._isSidebarOpen.value) {
      this._isSidebarCollapsed.next(false);
    }
  }

  closeSidebar() {
    this._isSidebarOpen.next(false);
  }

  toggleSidebarCollapse() {
    this._isSidebarCollapsed.next(!this._isSidebarCollapsed.value);
  }
}
