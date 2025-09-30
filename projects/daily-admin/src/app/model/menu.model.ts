export interface IMenu {
  id: number;
  title: string;
  route: string;
  icon: string;
  hasChildren: boolean;
  childrens?: ISubMenu[];
  isOpen?: boolean;
}

export interface ISubMenu {
  id: number;
  title: string;
  route: string;
}
