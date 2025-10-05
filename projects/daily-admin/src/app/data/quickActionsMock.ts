import { IActionButton } from '../model/quickActions.model';

export const quickActionsMock: IActionButton[] = [
  {
    id: 'novo-artigo',
    icon: 'fa-plus',
    color: 'text-indigo-600',
    background: 'bg-indigo-100',
    hoverBackground: 'bg-indigo-200',
    label: 'Novo Artigo',
    router: '/home/posts',
  },
  {
    id: 'ver-todos',
    icon: 'fa-list',
    color: 'text-purple-600',
    background: 'bg-purple-100',
    hoverBackground: 'bg-purple-200',
    label: 'Ver Todos',
    router: '/home/all-posts',
  },
  {
    id: 'estatisticas',
    icon: 'fa-chart-line',
    color: 'text-green-600',
    background: 'bg-green-100',
    hoverBackground: 'bg-green-200',
    label: 'Estatísticas',
    router: '/home/statistics',
  },
  {
    id: 'configuracoes',
    icon: 'fa-cog',
    color: 'text-amber-600',
    background: 'bg-amber-100',
    hoverBackground: 'bg-amber-200',
    label: 'Configurações',
    router: '/home/logs',
  },
];
