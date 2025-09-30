export interface IMenu {
  id: number;
  title: string;
  route: string;
  icon: string;
  isOpen?: boolean;
  badgeCount?: number;
  hasChildren: boolean;
  childrens?: ISubMenu[];
}

export interface ISubMenu {
  id: number;
  title: string;
  route: string;
  badgeCount?: number;
}
