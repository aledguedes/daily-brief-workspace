export interface IContentTypes {
  type: IFormatType;
  description: string;
  tone?: string;
  audience?: string;
  structure: string;
  goal: string;
}

export type IFormatType =
  | 'article'
  | 'social'
  | 'news_summary'
  | 'blog'
  | 'newsletter'
  | 'thread'
  | 'listicle'
  | 'opinion'
  | 'faq'
  | 'infographic'
  | 'tutorial'
  | 'review'
  | 'whitepaper';
