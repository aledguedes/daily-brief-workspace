export interface ILog {
  id: number;
  reportId: string;
  level: string;
  action: string;
  created_by: string;
  details: IDetails;
  timestamp: string;
  expanded: boolean;
  statusLabel: 'INFO' | 'SUCESSO' | 'ERRO';
}

export interface IDetails {
  metrics: IMetrics;
  summary: string;
  duration_seconds: number;
}

export interface IMetrics {
  failed: number;
  created: number;
  retries: number;
  categories: ICategories;
}

export interface ICategories {}
