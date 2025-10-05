import { IStatisticsCards } from '../model/statisticsCard.model';

export const dashboardMockData: IStatisticsCards[] = [
  {
    title: 'Total de Artigos',
    value: 248,
    percentage: 12,
    status: 'este mês',
    icon: 'fas fa-file-alt',
    color: 'text-indigo-100',
    bgColor: 'bg-indigo-600',
    isPositive: true,
  },
  {
    title: 'Em Rascunho',
    value: 15,
    status: 'aguardando revisão',
    icon: 'fas fa-clock',
    color: 'text-purple-100',
    bgColor: 'bg-purple-600',
    isPositive: false,
  },
  {
    title: 'Visualizações',
    value: '45.2k',
    percentage: 24,
    status: 'este mês',
    icon: 'fas fa-eye',
    color: 'text-green-100',
    bgColor: 'bg-green-600',
    isPositive: true,
  },
  {
    title: 'Leitores',
    value: '12.4k',
    percentage: 8,
    status: 'este mês',
    icon: 'fas fa-users',
    color: 'text-amber-100',
    bgColor: 'bg-amber-600',
    isPositive: false,
  },
];
