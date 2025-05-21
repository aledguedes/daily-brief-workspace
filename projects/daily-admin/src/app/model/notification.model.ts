export interface INotification {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  show: boolean;
  title: string;
}
