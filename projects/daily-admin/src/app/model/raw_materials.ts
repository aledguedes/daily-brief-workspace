import { IStatus } from './status.model';

export interface IRawMaterial {
  taskId: string;
  userId: string;
  theme: string | null;
  contentType: string | null;
  rawMaterialIds: string[];
  suggestedImagePrompt: string | null;
  createdAt: string;
  updatedAt: string;
  sourceUrls: string[];
  status: IStatus;
}

export interface IRawMaterialId {
  id: string;
  userId: string;
  taskId: string;
  url: string;
  content: string;
  createdAt: string;
}

export interface IRawMaterialContentResponse {
  [id: string]: string;
}

export interface IRawMaterialByMaterialIds {
  id: string;
  url: string;
  user_id: string;
  taskId: string;
  content: string;
  created_at: string;
}

export interface IRawMaterialUpdateRequest {
  content: string;
}
