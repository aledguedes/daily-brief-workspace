import { MultilangText } from '../types/general.types';
import { ICategory } from './category.model';
import { IStatus } from './status.model';

export interface IPost {
  id: string;
  title: MultilangText;
  excerpt: MultilangText;
  content: MultilangText;
  image: string | null;
  author: string | null;
  tags: string[];
  category: ICategory;
  metaDescription: MultilangText;
  affiliateLinks: MultilangText | Record<string, unknown>;
  status: IStatus;
  publishedAt?: string | null;
  readTime: string | null;
  createdAt: string;
  updatedAt: string;
  sources?: string[];
  link?: string;
}

export interface ISideManuArticle {
  status: IStatus;
  createdAt: string;
  updatedAt: string;
  author: string;
  category: ICategory;
  tags: string[];
  affiliateLinks: MultilangText;
}
