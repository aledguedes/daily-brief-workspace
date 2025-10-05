import { IMenu, IUserMenu } from '../model/menu.model';

export const sidebarMenus: IMenu[] = [
  {
    id: 1,
    title: 'Dashboard',
    route: '/home/dashboard',
    icon: 'fas fa-chart-line',
    childrens: [],
    hasChildren: false,
  },
  {
    id: 2,
    title: 'Automation',
    route: '/home/automation',
    icon: 'fas fa-robot',
    childrens: [
      {
        id: 3,
        title: 'Raw Materials',
        route: '/home/automation/raw-materials',
      },
      { id: 4, title: 'Production', route: '/home/automation/production' },
    ],
    hasChildren: true,
    isOpen: false,
  },
  {
    id: 5,
    title: 'Posts',
    route: '/home/posts',
    icon: 'fas fa-newspaper',
    childrens: [
      {
        id: 6,
        title: 'All posts',
        route: '/home/posts/all',
      },
      { id: 7, title: 'Create post', route: '/home/posts/create' },
      { id: 8, title: 'Update post', route: '/home/posts/update' },
      { id: 9, title: 'Delete post', route: '/home/posts/delete' },
    ],
    hasChildren: true,
    isOpen: false,
  },
  {
    id: 10,
    title: 'Logs',
    route: '/home/logs',
    icon: 'fas fa-clipboard-list',
    childrens: [],
    hasChildren: false,
  },
  {
    id: 11,
    title: 'Usuários',
    route: '/home/users',
    icon: 'fas fa-users',
    childrens: [],
    hasChildren: false,
  },
  {
    id: 12,
    title: 'Analytics',
    route: '/home/analytics',
    icon: 'fas fa-chart-bar',
    childrens: [],
    hasChildren: false,
  },
  {
    id: 13,
    title: 'Configurações',
    route: '/home/settings',
    icon: 'fas fa-cogs',
    childrens: [],
    hasChildren: false,
  },
];

export const userMenuItems: IUserMenu[] = [
  { id: 1, label: 'Editar Perfil', route: '/home/profile', icon: 'fas fa-user-edit' },
  { id: 2, label: 'Configurações', route: '/home/settings', icon: 'fas fa-cog' },
  { id: 3, label: 'Sair', route: '/', icon: 'fas fa-sign-out-alt' },
];
