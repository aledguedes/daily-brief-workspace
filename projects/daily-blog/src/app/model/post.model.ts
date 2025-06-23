import { ICategory } from './category.model';

export interface IPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  tags: string[];
  category: string;
  metaDescription: string;
  affiliateLinks: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'DRAFT';
  date: string;
  readTime: string;
  updatedAt: string;
  createdAt: string;
}
