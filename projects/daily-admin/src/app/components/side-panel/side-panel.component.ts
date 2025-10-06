import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IRecentPost } from '../../model/dashboard.model';
import { IPost } from '../../model/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-panel',
  imports: [CommonModule],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
})
export class SidePanelComponent {
  @Input() article: IPost = {
    id: 0,
    title: { PT: '', EN: '', ES: '' },
    excerpt: { PT: '', EN: '', ES: '' },
    content: { PT: '', EN: '', ES: '' },
    image: '',
    author: '',
    tags: [],
    category: '',
    metaDescription: { PT: '', EN: '', ES: '' },
    affiliateLinks: { PT: '', EN: '', ES: '' },
    status: 'PENDING',
    date: '',
    readTime: '',
    updatedAt: '',
    createdAt: '',
    sources: [],
    link: '',
  };
  @Input() isOpen = false;
  @Output() closePanel = new EventEmitter<void>();
  @Output() flowAction = new EventEmitter<{ action: string; id: number }>();

  panelClass = '';
  activeTab = 'tab-details';
  statusColor = '';
  tagColorMap: Record<string, string> = {};
  statusLabel = '';

  tabs = [
    { id: 'tab-details', label: 'Conteúdo & Detalhes' },
    { id: 'tab-raw', label: 'Dados Brutos' },
    { id: 'tab-logs', label: 'Histórico & Logs' },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      this.panelClass = this.isOpen
        ? 'translate-x-0 opacity-100'
        : 'translate-x-full opacity-0 pointer-events-none';
      // Garante que a aba inicial seja 'tab-details' ao abrir o painel
      if (this.isOpen) {
        this.activeTab = 'tab-details';
      }
    }

    if (changes['article'] && this.article) {
      this.prepareData();
    }
  }

  private prepareData(): void {
    const statusMap: Record<string, { color: string; label: string }> = {
      APPROVED: { color: 'bg-green-500/90', label: 'Concluído' },
      PENDING: { color: 'bg-yellow-500/90', label: 'Em Progresso' },
      REJECTED: { color: 'bg-red-500/90', label: 'Rejeitado' },
      DRAFT: { color: 'bg-gray-400', label: 'Rascunho' },
    };

    const statusInfo = statusMap[this.article.status] || {
      color: 'bg-gray-400',
      label: 'Pendente',
    };
    this.statusColor = statusInfo.color;
    this.statusLabel = statusInfo.label;

    const colorMap: Record<string, string> = {
      Marketing: 'bg-blue-100 text-blue-700',
      UX: 'bg-pink-100 text-pink-700',
      Design: 'bg-purple-100 text-purple-700',
      Tecnologia: 'bg-indigo-100 text-indigo-700',
    };

    this.tagColorMap = {};
    (this.article.tags || []).forEach((tag) => {
      const match = Object.keys(colorMap).find((key) => tag.includes(key));
      this.tagColorMap[tag] = colorMap[match || ''] || 'bg-gray-100 text-gray-700';
    });
  }

  onClose(): void {
    this.closePanel.emit();
    // Reseta a aba ativa ao fechar o painel
    this.activeTab = 'tab-details';
  }

  setActiveTab(tab: string): void {
    console.log('Switching to tab:', tab); // Log para depuração
    this.activeTab = tab;
  }

  handleFlowAction(action: string, id?: number): void {
    if (id !== undefined) {
      this.flowAction.emit({ action, id });
    }
  }

  getPanelDetails() {
    return {
      raw_material:
        this.article.content.PT || this.article.excerpt.PT || 'Nenhum conteúdo disponível.',
      generated_content_preview: {
        summary: this.article.excerpt.PT || 'Sem resumo disponível.',
        topics: this.article.tags.length > 0 ? this.article.tags : ['Nenhum tópico disponível.'],
      },
      image_prompt: this.article.metaDescription.PT || 'Nenhum prompt de imagem disponível.',
      logs: [
        `Criado em: ${this.article.createdAt || 'Data não informada'}`,
        `Atualizado em: ${this.article.updatedAt || 'Data não informada'}`,
      ].filter((log) => !log.includes('Data não informada')),
    };
  }
}
