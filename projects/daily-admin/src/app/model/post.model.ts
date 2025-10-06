import { MultilangText } from '../types/general.types';

export interface IPost {
  id: number;
  title: MultilangText;
  excerpt: MultilangText;
  content: MultilangText;
  image: string;
  author: string;
  tags: string[];
  category: string;
  metaDescription: MultilangText;
  affiliateLinks: MultilangText;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'DRAFT';
  date: string;
  readTime: string;
  updatedAt: string;
  createdAt: string;
  sources: string[];
  link: string;
}

export interface ISideManuArticle {
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'DRAFT' | string;
  createdAt: string;
  updatedAt: string;
  author: string;
  category: string;
  tags: string[];
  affiliateLinks: MultilangText;
}
