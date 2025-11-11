import { Component, EventEmitter, Input, Output, signal, computed, effect } from '@angular/core';
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
  @Input({ required: true }) set task(value: IRawMaterial) {
    this.taskSignal.set(value);
  }

  private taskSignal = signal<IRawMaterial>({
    taskId: '',
    userId: '',
    theme: null,
    contentType: null,
    rawMaterialIds: [],
    suggestedImagePrompt: null,
    createdAt: '',
    updatedAt: '',
    sourceUrls: [],
    status: {
      id: 0,
      name: '',
      displayName: '',
      bgClass: '',
      textClass: '',
    },
  });

  urlImage: string = 'https://placehold.co/600x400.png';
  gapProcessUrl: string = 'Falha na geração do conteúdo por texto.';

  private readonly MAX_VISIBLE_IDS = 1;

  // Signals computados para evitar chamadas de funções no template
  visibleRawMaterialIds = computed(() =>
    this.taskSignal().rawMaterialIds.slice(0, this.MAX_VISIBLE_IDS),
  );

  hiddenIdsCount = computed(() => this.taskSignal().rawMaterialIds.length - this.MAX_VISIBLE_IDS);


  // Signal para IDs formatados (evita toString().slice() no template)
  // Se houver apenas 1 item, mostra completo. Se houver mais, trunca.
  formattedRawMaterialIds = computed(() => {
    const ids = this.visibleRawMaterialIds();
    const totalIds = this.taskSignal().rawMaterialIds.length;
    
    return ids.map(id => {
      const idStr = id.toString();
      // Se houver apenas 1 ID no total, mostra completo
      if (totalIds === 1) {
        return idStr;
      }
      // Se houver mais de 1 ID, trunca conforme o original
      return idStr.slice(0, 29) + '...';
    });
  });

  // Getter para acessar a task no template
  get task(): IRawMaterial {
    return this.taskSignal();
  }

  ngOnInit(): void {
    if (!this.taskSignal()) {
      console.error('Task data is required for TaskCardComponent');
    }
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
  }

  // Signals computados para status (evita múltiplas chamadas de função)
  statusGradient = computed(() => {
    const status = this.taskSignal().status.name;
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
  });

  statusBackground = computed(() => {
    const status = this.taskSignal().status.name;
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
  });

  statusTextColor = computed(() => {
    const status = this.taskSignal().status.name;
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
  });

  statusPulseColor = computed(() => {
    const status = this.taskSignal().status.name;
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
  });

  onOpenDetails(): void {
    this.openDetails.emit(this.taskSignal().taskId);
  }
}
