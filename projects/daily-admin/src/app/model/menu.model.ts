export interface IMenu {
  id: number;
  title: string;
  route: string;
  icon: string;
  hasChildren: boolean;
  childrens?: ISubMenu[];
}

export interface ISubMenu {
  id: number;
  title: string;
  route: string;
}
