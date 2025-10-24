export interface IRawMaterial {
  user_id: string;
  automation_request_id: string | null;
  task_id: string;
  status: IStatus;
  theme: string | null;
  content_type: string | null;
  raw_material_ids: string[];
  generated_content: string | null;
  suggested_image_prompt: string | null;
  created_at: string;
  updated_at: string;
}

export interface IStatus {
  id: number;
  name: string;
  display_name: string;
  bg_class: string;
  text_class: string;
}

export interface IRawMaterialId {
  raw_content: string;
}

export interface IRawMaterialContentResponse {
  [id: string]: string;
}

export interface IRawMaterialByMaterialIds {
  id: string;
  url: string;
  user_id: string;
  task_id: string;
  content: string;
  created_at: string;
}
