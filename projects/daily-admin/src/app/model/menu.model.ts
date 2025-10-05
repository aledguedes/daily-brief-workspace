export interface IMenu {
  id: number;
  title: string;
  route: string;
  icon: string;
  isOpen?: boolean;
  hasChildren: boolean;
  childrens?: ISubMenu[];
}

export interface ISubMenu {
  id: number;
  title: string;
  route: string;
}

export interface IUserMenu {
  id: number;
  label: string;
  route: string;
  icon: string;
}
