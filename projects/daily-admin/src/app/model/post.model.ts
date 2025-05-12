type MultilangText = {
  pt: string;
  en: string;
  es: string;
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
}
