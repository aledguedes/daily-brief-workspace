import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRawMaterial } from '../../model/raw_materials';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-card-automation',
  imports: [CommonModule],
  templateUrl: './article-card-automation.component.html',
  styleUrl: './article-card-automation.component.scss',
})
export class ArticleCardAutomationComponent {
  @Output() openDetails = new EventEmitter<string>();
  @Input({ required: true }) task: IRawMaterial = {
    theme: '',
    user_id: '',
    task_id: '',
    status: {
      id: 0,
      name: '',
      display_name: '',
      bg_class: '',
      text_class: '',
    },
    created_at: '',
    updated_at: '',
    content_type: '',
    generated_content: '',
    raw_material_ids: [],
    automation_request_id: '',
    suggested_image_prompt: '',
  };

  urlImage: string = 'https://placehold.co/600x400.png';
  gapProcessUrl: string = 'Falha na geração do conteúdo por texto.';

  private readonly MAX_VISIBLE_IDS = 1;

  ngOnInit(): void {
    if (!this.task) {
      console.error('Task data is required for TaskCardComponent');
    }
  }

  get visibleRawMaterialIds(): string[] {
    // Sempre pega só o primeiro ID (máximo 1)
    return this.task.raw_material_ids.slice(0, this.MAX_VISIBLE_IDS);
  }

  get hiddenIdsCount(): number {
    // Quantidade restante após o 1º ID
    const count = this.task.raw_material_ids.length - this.MAX_VISIBLE_IDS;
    return count > 0 ? count : 0;
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
  }

  gradientByStatus(status: string): string {
    switch (status) {
      case 'APPROVED':
        return 'from-emerald-500 to-green-600';
      case 'RAW_COLLECTED':
        return 'from-amber-400 to-yellow-500';
      case 'PUBLISHED':
        return 'from-indigo-500 to-blue-600';
      default:
        return 'from-slate-500 to-slate-600';
    }
  }

  backgroundByStatus(status: string): string {
    switch (status) {
      case 'APPROVED':
        return 'bg-green-100';
      case 'RAW_COLLECTED':
        return 'bg-yellow-100';
      case 'PUBLISHED':
        return 'bg-blue-100';
      case 'FAILED_GENERATION':
        return 'bg-red-100';
      default:
        return 'bg-slate-100';
    }
  }

  colorByStatus(status: string): string {
    switch (status) {
      case 'APPROVED':
        return 'text-green-800';
      case 'RAW_COLLECTED':
        return 'text-yellow-800';
      case 'PUBLISHED':
        return 'text-blue-800';
      default:
        return 'text-slate-700';
    }
  }

  pulseColorByStatus(status: string): string {
    switch (status) {
      case 'APPROVED':
        return 'text-green-500';
      case 'RAW_COLLECTED':
        return 'text-yellow-500';
      case 'PUBLISHED':
        return 'text-blue-500';
      default:
        return 'text-slate-400';
    }
  }

  onOpenDetails(): void {
    this.openDetails.emit(this.task.task_id);
  }
}
