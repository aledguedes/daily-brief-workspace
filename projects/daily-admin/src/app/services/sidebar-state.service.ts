import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarStateService {
  private _isSidebarOpen = new BehaviorSubject<boolean>(false);
  isSidebarOpen$ = this._isSidebarOpen.asObservable();

  constructor() {}

  toggleSidebar() {
    this._isSidebarOpen.next(!this._isSidebarOpen.value);
  }

  closeSidebar() {
    this._isSidebarOpen.next(false);
  }
}
