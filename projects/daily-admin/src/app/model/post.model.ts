type MultilangText = {
  PT: string;
  EN: string;
  ES: string;
};

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
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  date: string;
  readTime: string;
  updatedAt: string;
  createdAt: string;
}

export interface ISideManuArticle {
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | string;
  createdAt: string;
  updatedAt: string;
  author: string;
  category: string;
  tags: string[];
  affiliateLinks: MultilangText;
}
