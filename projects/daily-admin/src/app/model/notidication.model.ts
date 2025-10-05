export interface INotification {
  id: number;
  message: string;
  time: string;
  icon: string; // Classe do Remix Icon (ex: 'ri-chat-3-line')
  iconColor: string; // Classe do Tailwind para a cor (ex: 'text-indigo-500')
}
