import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface Notification {
  title: string;
  message: string;
  type: NotificationType;
  show: boolean;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notificationSubject = new BehaviorSubject<Notification>({
    message: '',
    type: 'success',
    show: false,
    title: '',
  });
  notification$ = this.notificationSubject.asObservable();

  show(message: string, type: NotificationType = 'success', title: string) {
    this.notificationSubject.next({ title, message, type, show: true });
    setTimeout(() => this.hide(), 3500);
  }

  hide() {
    this.notificationSubject.next({ ...this.notificationSubject.value, show: false });
  }
}
