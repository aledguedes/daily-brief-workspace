import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidePanelComponent } from '../../../../components/side-panel/side-panel.component';
import { IRawMaterial } from '../../../../model/raw_materials';
import { ArticleCardAutomationComponent } from '../../../../components/article-card-automation/article-card-automation.component';
import { AutomationService } from '../../../../services/automation.service';
import { IPagination } from '../../../../model/pagination.model';

@Component({
  selector: 'app-post-automation',
  imports: [CommonModule, ArticleCardAutomationComponent, SidePanelComponent],
  templateUrl: './post-automation.component.html',
  styleUrl: './post-automation.component.scss',
})
export class PostAutomationComponent {
  private renderer = inject(Renderer2);
  private automationService = inject(AutomationService);

  pagination: {
    page: number;
    size: number;
  } = {
    page: 0,
    size: 10,
  };

  selectedArticle: IRawMaterial = {
    taskId: '',
    userId: '',
    theme: null,
    contentType: null,
    rawMaterialIds: [],
    suggestedImagePrompt: null,
    createdAt: '',
    updatedAt: '',
    status: {
      id: 0,
      name: '',
      displayName: '',
      bgClass: '',
      textClass: '',
    },
    sourceUrls: [],
  };
  panelOpen: boolean = false;
  recentPosts: IRawMaterial[] = [];

  filters = [
    { id: 'all', label: 'Todos', active: true },
    { id: 'completed', label: 'Concluídos', active: false },
    { id: 'progress', label: 'Em Progresso', active: false },
  ];

  ngOnInit(): void {
    this.getAllRawMaterials();
  }

  getAllRawMaterials() {
    this.automationService.listAllMaterials(this.pagination.page, this.pagination.size).subscribe({
      next: (response: IPagination<IRawMaterial>) => {
        console.log('LIST ALL MATERIALS:', response);

        this.recentPosts = response.content;
      },
      error: (error) => {
        console.error('Error fetching raw materials:', error);
      },
    });
  }

  setActiveFilter(filterId: string): void {
    this.filters = this.filters.map((filter) => ({
      ...filter,
      active: filter.id === filterId,
    }));
  }

  openSidePanel(taskId: string): void {
    const articleData = this.recentPosts.filter((article) => article.taskId === taskId)[0];
    if (articleData) {
      this.selectedArticle = articleData;
      this.panelOpen = true;
      // Em Angular, podemos controlar o overflow do body via DOM ou Renderer2,
      // mas para simplicidade neste passo, o CSS pode ajudar.
      this.renderer.addClass(document.body, 'no-scroll');
      console.log('Added no-scroll to body:', document.body.classList.contains('no-scroll')); // Log para depuração
    }
  }

  // Função placeholder para fechar o painel lateral
  closeSidePanel(): void {
    this.panelOpen = false;
    this.selectedArticle = {
      taskId: '',
      userId: '',
      theme: null,
      contentType: null,
      rawMaterialIds: [],
      suggestedImagePrompt: null,
      createdAt: '',
      updatedAt: '',
      status: {
        id: 0,
        name: '',
        displayName: '',
        bgClass: '',
        textClass: '',
      },
      sourceUrls: [],
    };
    // Remove a classe 'no-scroll' do <body>
    this.renderer.removeClass(document.body, 'no-scroll');
    console.log('Removed no-scroll from body:', !document.body.classList.contains('no-scroll')); // Log para depuração
  }
}
