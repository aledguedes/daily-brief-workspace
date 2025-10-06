import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPost } from '../../model/post.model';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent implements OnInit {
  @Input({ required: true }) article!: IPost;
  @Output() openDetails = new EventEmitter<number>();

  /** Dados prontos para o template — sem chamadas de função */
  ui = {
    statusLabel: '',
    statusClass: '',
    tagColors: [] as { label: string; class: string }[],
  };

  ngOnInit(): void {
    this.prepareStatus();
    this.prepareTags();
  }

  private prepareStatus(): void {
    const map: Record<string, { label: string; class: string }> = {
      APPROVED: { label: 'Aprovado', class: 'bg-green-500/90' },
      PENDING: { label: 'Em Progresso', class: 'bg-yellow-500/90' },
      DRAFT: { label: 'Rascunho', class: 'bg-yellow-500/90' },
      REJECTED: { label: 'Rejeitado', class: 'bg-red-500/90' },
    };

    const key = (this.article.status || '').toUpperCase();
    const found = map[key] || { label: 'Desconhecido', class: 'bg-gray-500/90' };
    this.ui.statusLabel = found.label;
    this.ui.statusClass = found.class;
  }

  private prepareTags(): void {
    const colorMap: Record<string, string> = {
      Marketing: 'bg-blue-100 border-blue-200 text-blue-700',
      UX: 'bg-pink-100 border-pink-200 text-pink-700',
      Design: 'bg-purple-100 border-purple-200 text-purple-700',
      Tecnologia: 'bg-indigo-100 border-indigo-200 text-indigo-700',
    };

    this.ui.tagColors = (this.article.tags || []).map((tag) => ({
      label: tag,
      class:
        colorMap[Object.keys(colorMap).find((k) => tag.includes(k)) || ''] ??
        'bg-gray-100 border-gray-200 text-gray-700',
    }));
  }

  onOpenDetails(): void {
    this.openDetails.emit(this.article.id);
  }
}
