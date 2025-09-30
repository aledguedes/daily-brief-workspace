export interface IToastNotification {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  show: boolean;
  title: string;
}
