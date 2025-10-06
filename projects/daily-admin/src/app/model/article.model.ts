export interface IArticleDetails {
  raw_material: string;
  generated_content_preview: {
    summary: string;
    topics: string[];
  };
  image_prompt: string;
  logs: string[];
}

export interface IArticle {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  status: 'completed' | 'progress';
  statusLabel: string;
  statusColor: 'green' | 'yellow';
  gradient: string;
  tags: string[];
  panelDetails: IArticleDetails;
}
