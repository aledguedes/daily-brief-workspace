import { INotification } from '../model/notidication.model';

export const notifications: INotification[] = [
  {
    id: 1,
    message: 'Novo comentário no post "Angular 20"',
    time: 'Há 5 minutos',
    icon: 'fas fa-comment-dots',
    iconColor: 'text-indigo-500',
  },
  {
    id: 2,
    message: 'Suas visualizações aumentaram em 15%',
    time: '1 hora atrás',
    icon: 'fas fa-chart-line',
    iconColor: 'text-green-500',
  },
  {
    id: 3,
    message: 'Novo usuário registrado',
    time: 'Ontem',
    icon: 'fas fa-user-plus',
    iconColor: 'text-orange-500',
  },
];
