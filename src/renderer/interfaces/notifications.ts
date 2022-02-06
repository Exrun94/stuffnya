export interface INotifications {
  type: 'success' | 'warning' | 'error';
  message: string | Error;
}
